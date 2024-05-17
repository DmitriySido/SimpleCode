import React, { useState, useEffect } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { okaidia } from '@uiw/codemirror-theme-okaidia';
import RunCodeButton from '../Buttons/RunCodeButton/RunCodeButton';
import './CodeMirorrBlock.scss';
import { ITask, IUser } from '../../utils/interfaces';
import {LevelChangeLogic} from '../../utils/LevelChangeLogic';

interface ICodeMirrorBlockProps{
  selectedTask: ITask,
  stateCheckAnswer: boolean,
  setWrongAnswer: () => void
}

interface DataObject {
  [key: string]: any;
}

function CodeMirorrBlock({ selectedTask, stateCheckAnswer, setWrongAnswer }: ICodeMirrorBlockProps) {
  const keyString = selectedTask.taskId

  const savedUserDataString = localStorage.getItem('userData')
  const savedUserData = savedUserDataString !== null ? JSON.parse(savedUserDataString) : null

  const bgColor = (color: string) => document.body.style.backgroundColor = color
  const [value, setValue] = useState(selectedTask.initialCode)
  const [newDataObject, setNewDataObject] = useState<DataObject>({})

  useEffect(() => {
    savedUserData.savedCode[`${keyString}`] === undefined ? setValue(selectedTask.initialCode) : setValue(savedUserData.savedCode[`${keyString}`])
    
    stateCheckAnswer && setValue(selectedTask.answerCode)
  }, [selectedTask.initialCode, stateCheckAnswer])

  const onChange = (val:any) => {
    setValue(val)
  }

  useEffect(() => {
    setNewDataObject({ [keyString]: value });
  }, [value, keyString]);

  useEffect(() => {
    if (Object.keys(newDataObject).length !== 0) {
      if (newDataObject[keyString] !== selectedTask.initialCode) {
        savedUserData.savedCode[keyString] = newDataObject[keyString];
        localStorage.setItem('userData', JSON.stringify(savedUserData));
      }
    }
  }, [newDataObject]);

  const displayColor = (result: number | string | boolean | unknown | number[] | string[], ok: boolean = true) => {
    let timeoutId
  
    clearTimeout(timeoutId)
  
    if (result === selectedTask.answer) {
      bgColor('#137006')
      LevelChangeLogic(selectedTask, selectedTask.taskId)
    } else {
      setWrongAnswer()
      bgColor('rgb(107, 2, 2)')
    }

    timeoutId = setTimeout(() => {bgColor('') }, 1000)
  };

  const executeCode = () => {
    try {
      const newResult = eval(value)

      selectedTask.id === 'returnString' || selectedTask.id === 'returnNumber' ? displayColor(newResult) : displayColor(newResult)

      if(selectedTask.id === 'returnArray'){
        JSON.stringify(newResult) === JSON.stringify(selectedTask.answer) ? bgColor('#137006') : bgColor('rgb(107, 2, 2)')
      }
      const timeoutId = setTimeout(() => {bgColor('') }, 1000)
      return () => clearTimeout(timeoutId)
    } catch (error) {
      displayColor(null, false)
    }
  };

  return (
    <div className='codeMiror__wrapper'>
      <div className='codeMirror-version'>Редактор кода V2.9.1</div>
      <CodeMirror
        value={value}
        height='400px'
        extensions={[javascript({ jsx: true })]}
        onChange={onChange}
        theme={okaidia}
        className='codeMirorr'
      />
      <RunCodeButton executeCode={executeCode}/>
    </div>
  )
}

export default CodeMirorrBlock;
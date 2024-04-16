import React, { useState, useEffect } from 'react';

import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { okaidia } from '@uiw/codemirror-theme-okaidia';

import './CodeMirorrBlock.scss';
import RunCodeButton from '../Buttons/RunCodeButton/RunCodeButton';

import { ITask } from '../../utils/interfaces';

interface ICodeMirrorBlockProps{
  randomTask: ITask,
  stateCheckAnswer: boolean,
  setWrongAnswer: () => void
}

function CodeMirorrBlock({ randomTask, stateCheckAnswer, setWrongAnswer }: ICodeMirrorBlockProps) {
  console.log(randomTask.taskId)

  const savedUserDataString = localStorage.getItem('userData'); // Получаем строку данных из localStorage
  const savedUserData = savedUserDataString !== null ? JSON.parse(savedUserDataString) : null;

  console.log(savedUserData)

  const [value, setValue] = useState(randomTask.initialCode)

  useEffect(() => {
    setValue(randomTask.initialCode)

    stateCheckAnswer && setValue(randomTask.answerCode)
  }, [randomTask.initialCode, stateCheckAnswer])

  const onChange = (val:string) => setValue(val)

  const displayColor = (result: number | string | boolean | unknown, ok: boolean = true) => {
    let timeoutId
  
    clearTimeout(timeoutId)
  
    if (result === randomTask.answer && ok === false) {
      document.body.style.backgroundColor = '#137006'
      if(!savedUserData.idCompletedTasks.includes(randomTask.taskId)){
        savedUserData.userExperience += randomTask.addExperience
        savedUserData.idCompletedTasks.push(randomTask.taskId)

        if(savedUserData.userExperience >= 20){
          savedUserData.userLevel = 7
        }else if(savedUserData.userExperience >= 70){
          savedUserData.userLevel = 6
        }else if(savedUserData.userExperience >= 100){
          savedUserData.userLevel = 5
        }else if(savedUserData.userExperience >= 140){
          savedUserData.userLevel = 4
        }else if(savedUserData.userExperience >= 170){
          savedUserData.userLevel = 3
        }else if(savedUserData.userExperience >= 210){
          savedUserData.userLevel = 2
        }else if(savedUserData.userExperience >= 250){
          savedUserData.userLevel = 1
        }
        localStorage.setItem('userData', JSON.stringify(savedUserData));
      }
    } else {
      document.body.style.backgroundColor = 'rgb(107, 2, 2)'
    }
    
    if(result === randomTask.answer){
      document.body.style.backgroundColor = '#137006'
      if(!savedUserData.idCompletedTasks.includes(randomTask.taskId)){
        savedUserData.userExperience += randomTask.addExperience
        savedUserData.idCompletedTasks.push(randomTask.taskId)

        if(savedUserData.userExperience >= 20){
          savedUserData.userLevel = 7
        }else if(savedUserData.userExperience >= 70){
          savedUserData.userLevel = 6
        }else if(savedUserData.userExperience >= 100){
          savedUserData.userLevel = 5
        }else if(savedUserData.userExperience >= 140){
          savedUserData.userLevel = 4
        }else if(savedUserData.userExperience >= 170){
          savedUserData.userLevel = 3
        }else if(savedUserData.userExperience >= 210){
          savedUserData.userLevel = 2
        }else if(savedUserData.userExperience >= 250){
          savedUserData.userLevel = 1
        }
        
        localStorage.setItem('userData', JSON.stringify(savedUserData));
      }
    }else{
      setWrongAnswer()
      document.body.style.backgroundColor = 'rgb(107, 2, 2)'
    }

    timeoutId = setTimeout(() => {document.body.style.backgroundColor = '' }, 1000)
  };

  const executeCode = () => {
    try {
      const newResult = eval(value)

      if(randomTask.id === 'returnString'){
        displayColor(newResult)

      }else if(randomTask.id === 'returnNumber'){
        displayColor(newResult)

      }else if(randomTask.id === 'returnArray'){
        if (JSON.stringify(newResult) === JSON.stringify(randomTask.answer)) {
          document.body.style.backgroundColor = '#137006';
          const timeoutId = setTimeout(() => {document.body.style.backgroundColor = '' }, 1000);

          return () => clearTimeout(timeoutId)
        } else {
          document.body.style.backgroundColor = 'rgb(107, 2, 2)';
          const timeoutId = setTimeout(() => {document.body.style.backgroundColor = '' }, 1000);

          return () => clearTimeout(timeoutId);
        }
      }
    } catch (error: any) {
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
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './TestItem.scss'

import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { okaidia } from '@uiw/codemirror-theme-okaidia';

import { ITest } from '../../../../utils/interfaces';
import Header from '../../../Header/Header';
import Button from '../../../Buttons/Button';
import ExitPopup from '../../../Popups/ExitPopup/ExitPopup';
import RegistrationPopup from '../../../Popups/RegistrationPopup/RegistrationPopup';
import { LevelChangeLogic } from '../../../../utils/LevelChangeLogic';

interface TestsProps {
  testJS: ITest[]
}

const TestItem: React.FC<TestsProps> = ({ testJS }) => {
  const { testId } = useParams<{ testId: string }>()
  const selectedTest = testJS.find(task => task.testId === testId)
  const [clickable, setClickable] = useState<boolean>(true)
  const [clue, setClue] = useState<boolean>()
  const [value, setValue] = useState(selectedTest?.code)

  const checkClue = () => setClue(true)
  const bgColor = (color: string) => document.body.style.backgroundColor = color

  useEffect(()=>{clue === true && setValue(selectedTest?.clue)}, [clue])

  if (!selectedTest) {
    return <div>Loading...</div> // Возможно, здесь нужно что-то другое в случае отсутствия выбранной задачи
  }

  const shuffledArray = [...selectedTest.moreAnswer, selectedTest.answer].sort(() => Math.random() - 0.5)

  const answerHandle = (content: string) => {
    let timeoutId
  
    clearTimeout(timeoutId)

    if(content === selectedTest.answer){
      LevelChangeLogic(selectedTest, selectedTest.testId)
      setClickable(false)
      bgColor('#137006')
    }else{
      setClue(true)
      bgColor('rgb(107, 2, 2)')
    }

    timeoutId = setTimeout(() => {bgColor('') }, 1000)
  }

  const savedUserDataString = localStorage.getItem('userData')
  const savedUserData = savedUserDataString !== null ? JSON.parse(savedUserDataString) : null


  return (
    <div className="test__wrapper content">
      {savedUserData.userName === 'user78534392' ? <RegistrationPopup/> : ''}
      <Header selectedTest={selectedTest}/>
      {clickable === false && <ExitPopup/>}
      <div className="test__inner">
        <div className='codeMirorr-wrapper'>
          <div className='codeMirror-version'>Редактор кода V2.9.1</div>
          <CodeMirror
            value={value}
            height='500px'
            extensions={[javascript({ jsx: true })]}
            theme={okaidia}
            className='codeMirorr-test'
            readOnly={true}
          />
          <div className='btn' onClick={checkClue}>
            <Button moreClass={`${clue && 'clue-button infinite'}`}>Подсказка</Button>
          </div>
        </div>

        <div className='test-right'>
          <div className='text'>
            <h2>{selectedTest.taskName}</h2>
            <p>{selectedTest.task}</p>
          </div>
          <ul className='answer-list'>
            {shuffledArray.map((answer, index) => {
              return(<li style={{ pointerEvents: clickable ? 'auto' : 'none' }} key={index + 'answer'} onClick={()=> answerHandle(answer)}><button>{answer}</button></li>)
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TestItem;
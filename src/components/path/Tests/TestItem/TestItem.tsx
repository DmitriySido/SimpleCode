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

interface TestsProps {
  testJS: ITest[];
}

const TestItem: React.FC<TestsProps> = ({ testJS }) => {
  const { testId } = useParams<{ testId: string }>();
  const selectedTest = testJS.find(task => task.testId === testId);
  const [clickable, setClickable] = useState<boolean>(true);
  const [clue, setClue] = useState<boolean>()
  const [value, setValue] = useState(selectedTest?.code)

  const checkClue = () => setClue(true)

  useEffect(()=>{clue === true && setValue(selectedTest?.clue)}, [clue])

  if (!selectedTest) {
    return <div>Loading...</div>; // Возможно, здесь нужно что-то другое в случае отсутствия выбранной задачи
  }

  const shuffledArray = [...selectedTest.moreAnswer, selectedTest.answer].sort(() => Math.random() - 0.5);

  const answerHandle = (content: string) => {
    console.log(content)
    let timeoutId
  
    clearTimeout(timeoutId)

    if(content === selectedTest.answer){
      if(!savedUserData.idCompletedTasks.includes(selectedTest.testId)){
        savedUserData.userExperience += selectedTest.addExperience
        savedUserData.idCompletedTasks.push(selectedTest.testId)

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
      setClickable(false)
      document.body.style.backgroundColor = '#137006'
    }else{
      setClue(true)
      document.body.style.backgroundColor = 'rgb(107, 2, 2)'
    }

    timeoutId = setTimeout(() => {document.body.style.backgroundColor = '' }, 1000)
  }

  const savedUserDataString = localStorage.getItem('userData'); // Получаем строку данных из localStorage
  const savedUserData = savedUserDataString !== null ? JSON.parse(savedUserDataString) : null;


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
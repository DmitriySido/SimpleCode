import  './Task.scss'
import { useParams } from 'react-router-dom';
import Header from '../../Header/Header'
import TheoreticalMaterial from '../../TheoreticalMaterial/TheoreticalMaterial'
import { useState } from 'react';
import React from 'react';
import CodeMirorrBlock from '../../codeMirror/CodeMirorrBlock';
import { ITask } from '../../../utils/interfaces';
import RegistrationPopup from '../../Popups/RegistrationPopup/RegistrationPopup';

interface TaskProps {
  textTasks: ITask[];
}

const Task: React.FC<TaskProps> = ({ textTasks }) => {
  
  const { taskId } = useParams<{ taskId: string }>();
  const selectedTask = textTasks.find(task => task.taskId === taskId);
  const [stateCheckAnswer, setStateCheckAnswer] = useState(false);
  const [wrongAnswer, setWrongAnswer] = useState(false)
  
  if (!selectedTask) {
    return <div>Loading...</div>; // Возможно, здесь нужно что-то другое в случае отсутствия выбранной задачи
  }

  const savedUserDataString = localStorage.getItem('userData');
  const savedUserData = savedUserDataString !== null ? JSON.parse(savedUserDataString) : null;

  return (
    <div className="task__wrapper content">
      {savedUserData.userName === 'user78534392' ? <RegistrationPopup/> : ''}
      <Header selectedTask={selectedTask} />
      <div className="task__inner">
        <TheoreticalMaterial randomTask={selectedTask} onCheckAnswer={() => setStateCheckAnswer(true)} wrongAnswer={wrongAnswer}/>
        <CodeMirorrBlock selectedTask={selectedTask} stateCheckAnswer={stateCheckAnswer} setWrongAnswer={() => setWrongAnswer(true)}/>
      </div>
    </div>
  );
};

export default Task;
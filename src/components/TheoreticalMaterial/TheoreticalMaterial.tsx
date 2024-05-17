import React, { useRef, useState } from 'react';
import Button from '../Buttons/Button';
import StepsPopup from './StepsPopup/StepsPopup';
import LampIcon from '../../icons/lamp-icon.png';
import './TheoreticalMaterial.scss';
import { ITask } from '../../utils/interfaces';

interface TheoreticalMaterialProps {
  randomTask: ITask,
  onCheckAnswer: () => void,
  wrongAnswer?: boolean,
}

const TheoreticalMaterial: React.FC<TheoreticalMaterialProps> = ({ randomTask, onCheckAnswer, wrongAnswer }) => {
  const [stepsPopup, setStepsPopup] = useState(false)
  const handlePopup = () => stepsPopup === false ? setStepsPopup(true) : setStepsPopup(false)

  
  return (
    <div className="theoretical-material__wrapper">
      {stepsPopup && <StepsPopup stepsButtonHandle={handlePopup} randomTask={randomTask} />}

      <div className="theoretical-material__inner">
        <h2 className="theoretical-material__title">Теоретический материал</h2>
        <p className="theoretical-material__text">{randomTask.task}</p>
        <span className="theoretical-material__expected">{randomTask.expectedText}</span>
      </div>
      <div className="button__wrapper">
        <div className="btn" onClick={() => onCheckAnswer()}>
          <Button moreClass={'theoretical-material'}>Посмотреть решение</Button>
        </div>
        <div className="btn" onClick={handlePopup}>
          <Button moreClass={`theoretical-material ${wrongAnswer ? 'infinite' : ''}`}>
            По шагам
            <img className="button-img" src={LampIcon} alt="Lamp icon" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TheoreticalMaterial;
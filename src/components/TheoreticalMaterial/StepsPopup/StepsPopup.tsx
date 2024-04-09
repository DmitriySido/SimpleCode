import React, { useState } from 'react'
import Button from '../../Buttons/Button'
import './StepsPopup.scss'
import { ITask } from '../../../utils/interfaces';

interface PopupProps {
  stepsButtonHandle: () => void;
  randomTask: ITask,
}

const StepsPopup:React.FC<PopupProps> = ({ stepsButtonHandle, randomTask }) => {
  const [popupState, setpopupState] = useState(false)

  const steps = Object.entries(randomTask.steps)


  const closePopup = () => {
    setpopupState(true)
    setTimeout(() => {
      setpopupState(false)
      stepsButtonHandle();
    }, 1000); // 1 секунда задержки
  }

  return (
    <div onClick={closePopup} className={popupState ? 'popup-overlay inactive' : 'popup-overlay'}>
      <div className='steps-popup__wrapper'>
        <div onClick={closePopup} className='btn'>
          <Button moreClass='exit-button'>Понял, ёптэ</Button>
        </div>

        <ul className='steps'>
          {steps.map((step, index) => {
            console.log(step)
            return(
              <li key={index + 'Step'}>
                <h2>{`Шаг ${index + 1}.`}</h2>
                <p>{step.slice(1)}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default StepsPopup;
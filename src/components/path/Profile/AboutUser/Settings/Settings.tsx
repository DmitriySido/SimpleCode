import React, { useState } from 'react'
import './Settings.scss'
import Button from '../../../../Buttons/Button';

interface PopupProps {
  settingsButtonHandle: () => void;
}

const StepsPopup:React.FC<PopupProps> = ({ settingsButtonHandle }) => {
  const [popupState, setPopupState] = useState(false)


  const closePopup = () => {
    setPopupState(true)
    setTimeout(() => {
      setPopupState(false)
      settingsButtonHandle();
    }, 1000); // 1 секунда задержки
  }

  return (
    <div className={popupState ? 'popup-overlay inactive' : 'popup-overlay'}>
      <div className='steps-popup__wrapper'>
        <div onClick={closePopup} className='btn'>
          <Button moreClass='exit-button'>Понял, ёптэ</Button>
        </div>

        <h2 className='settings-title'>Выбрать аватарку:</h2>
        <ul className='avatar-list'>
          <li className='avatar-item'>
            foto1
          </li>
          <li className='avatar-item'>
            foto2
          </li>
          <li className='avatar-item'>
            foto3
          </li>
        </ul>
      </div>
    </div>
  );
}

export default StepsPopup;
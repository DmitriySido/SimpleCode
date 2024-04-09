import React from 'react';
import './ExitPopup.scss'
import { Link } from 'react-router-dom';

const ExitPopup = () => {

  return(
    <div className="exit-popup__overlay">
      <div className="exit-popup">
        <h3>Вам начислено +19 очков опыта!</h3>
        <Link className='exit-button' to={'/Tests'}>Выйти</Link>
      </div>
    </div>
  )
}

export default ExitPopup
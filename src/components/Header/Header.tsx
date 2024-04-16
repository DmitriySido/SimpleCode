import './Header.scss'
import React from 'react';
import { ITask, ITest } from '../../utils/interfaces';

interface ISelectedTaskProps {
  selectedTask?: ITask,
  selectedTest?: ITest
}

const Header: React.FC<ISelectedTaskProps> = ({ selectedTask, selectedTest }) => {

  return(
    <header className="header">
      <div className='header-language'>JavaScript</div>

      <div className='header-user'>
        <div className='header-user__foto'>foto</div>
        <div className='header-user__level'>{selectedTask ? selectedTask?.level : selectedTest?.level} lvl</div>
        <h3 className='user-experience'>+{selectedTask?.addExperience} очков</h3>
      </div>
    </header>
  )
}

export default Header
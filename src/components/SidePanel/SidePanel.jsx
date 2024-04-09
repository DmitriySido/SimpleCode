import './SidePanel.scss'
import HomeIcon from '../../icons/home-icon.png'
import TasksIcon from '../../icons/task-icon.png'
import ProfileIcon from '../../icons/profile-icon.png'
import TestsIcon from '../../icons/tests-icon.png'

import { Link } from 'react-router-dom'


const SidePanel = () => {

  return(
    <aside className="side-panel">
      <ul className='navigation-list'>
        <li className='navigation-item'>
          <Link to='/' className='navigation-link'>
            <img className='navigation-icon' src={HomeIcon} alt="Дамой" />
            <h3 className='navigation-text'>Дамой</h3>
          </Link>
        </li>
        <li className='navigation-item'>
          <Link to='/TasksList' className='navigation-link'>
            <img className='navigation-icon' src={TasksIcon} alt="Задания" />
            <h3 className='navigation-text'>Задания</h3>
          </Link>
        </li>
        <li className='navigation-item'>
          <Link to='/Tests' className='navigation-link'>
            <img className='navigation-icon' src={TestsIcon} alt="Тесты" />
            <h3 className='navigation-text'>Тесты</h3>
          </Link>
        </li>
        <li className='navigation-item'>
          <Link to='/Profile' className='navigation-link'>
            <img className='navigation-icon' src={ProfileIcon} alt="Профиль" />
            <h3 className='navigation-text'>Профиль</h3>
          </Link>
        </li>
      </ul>
    </aside>
  )
}

export default SidePanel
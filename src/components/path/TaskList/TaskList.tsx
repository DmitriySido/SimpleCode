import { Link } from 'react-router-dom'
import './TaskList.scss'
import { useState } from 'react';
import { ITask, IUser } from '../../../utils/interfaces';
import React from 'react';
import CheckMarkIcon from '../../../icons/check-mark-icon.png'

interface TaskProps {
  textTasks: ITask[],
  savedUserData: IUser,
}

const TasksList: React.FC<TaskProps> = ({ textTasks }) => {
  const savedUserDataString = localStorage.getItem('userData'); // Получаем строку данных из localStorage
  const savedUserData = savedUserDataString !== null ? JSON.parse(savedUserDataString) : null;

  const [ids] = useState(savedUserData.idCompletedTasks)

  const [searchTerm, setSearchTerm] = useState('')
  const [searchLevel, setSearchLevel] = useState('SelectLevel')

  const filteredTasks = textTasks.filter((task) =>
    task.taskName.toLowerCase().includes(searchTerm.toLowerCase()) && (searchLevel === 'SelectLevel' || task.level.toString() === searchLevel)
  )

  const isCompleted = (id:any) => ids.includes(id);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(event.target.value)
  const selectLevelFunc = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLevel = event.target.value
    setSearchLevel(selectedLevel !== 'SelectLevel' ? selectedLevel : '')
  };

  return (
    <div className='tasks content'>

      <form className='task-list__form' action="#">
        <input type="text" placeholder='Поиск задания' value={searchTerm} onChange={handleSearchChange} />
        <select name="selectLevel" id="selectLevel" onChange={selectLevelFunc} value={searchLevel}>
          <option value="SelectLevel" disabled={true}>Выбрать уровень</option>
          <option value="8">- 8 -</option>
          <option value="7">- 7 -</option>
        </select>
      </form>
      <ul className='task-list'>
        {filteredTasks.map((task, index) => (
          <Link to={`/Task/${task.taskId}`} className={isCompleted(task.taskId) ?'task-item completed' : 'task-item'} key={index}>
            <h2 className='task-name'>
              <span className='task-lvl'>{task.level} lvl</span> {task.taskName}
            </h2>
            <span className='task-lang'>{task.lang}</span>

            {isCompleted(task.taskId) && (<img className='check-mark' src={CheckMarkIcon}/>)}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default TasksList;

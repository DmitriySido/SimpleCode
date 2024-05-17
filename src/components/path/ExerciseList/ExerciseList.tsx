import React, { useState } from "react"
import { ITask, ITest, IUser } from "../../../utils/interfaces";

import './ExerciseList.scss'
import ExerciseItem from "./ExerciseItem/ExerciseItem";


interface TestsProps {
  testJS: ITest[],
  textTasks: ITask[],
  savedUserData: IUser,
}

const ExerciseList: React.FC<TestsProps> = ({ testJS = [], textTasks = [] }) => {
  const savedUserDataString = localStorage.getItem('userData'); 
  const savedUserData = savedUserDataString ? JSON.parse(savedUserDataString) : null;

  let exercise: any[] = [];

  if (testJS.length > 0) {
    exercise = testJS;
  } else if (textTasks.length > 0) {
    exercise = textTasks;
  }

  const [ids] = useState<number[]>(savedUserData?.idCompletedTasks || []);

  const isCompleted = (id: number) => ids.includes(id);

  const [searchTerm, setSearchTerm] = useState('');
  const [searchLevel, setSearchLevel] = useState('SelectLevel');

    const filteredTasks = exercise.filter((task) =>
      task.taskName.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (searchLevel === 'SelectLevel' || task.level.toString() === searchLevel)
    );
  
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(event.target.value)
    const selectLevelFunc = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedLevel = event.target.value
      setSearchLevel(selectedLevel !== 'SelectLevel' ? selectedLevel : '')
    };

  return(
    <div className='tests content'>
      <form className='task-list__form' action="#">
        <input type="text" placeholder='Поиск задания' value={searchTerm} onChange={handleSearchChange} />
        <select name="selectLevel" id="selectLevel" onChange={selectLevelFunc} value={searchLevel}>
          <option value="SelectLevel" disabled={true}>Выбрать уровень</option>
          <option value="8">- 8 -</option>
          <option value="7">- 7 -</option>
          <option value="6">- 6 -</option>
        </select>
      </form>
      <ul className='task-list'>
        {filteredTasks.map((task, index) => (
          <ExerciseItem task={task} index={index} key={index} isCompleted={isCompleted} />
        ))}
      </ul>
    </div>
  )
}

export default ExerciseList
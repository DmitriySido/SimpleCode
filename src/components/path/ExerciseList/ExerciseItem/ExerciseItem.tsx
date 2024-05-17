import React from "react"
import { Link } from "react-router-dom"
import CheckMarkIcon from '../../../../icons/check-mark-icon.png'
import { ITask, ITest } from "../../../../utils/interfaces"

interface ExerciseItemProps {
  task?: ITask,
  test?: ITest,
  index: number,
  isCompleted: (id: number) => boolean;
}

const ExerciseItem: React.FC<ExerciseItemProps> = ({ task = {}, test = {}, index, isCompleted }) => {
  let exercise: any = {}

  if (Object.keys(task).length > 0) {
    exercise = task
  } else if (Object.keys(test).length > 0) {
    exercise = test
  }

  const isTestCompleted = exercise.testId !== undefined && isCompleted(exercise.testId)
  const isTaskCompleted = exercise.taskId !== undefined && isCompleted(exercise.taskId)
  const className = isTestCompleted || isTaskCompleted ? 'task-item completed' : 'task-item'

  return(
    <Link to={exercise.testId !== undefined ? `/Test/${exercise.testId}` : `/Task/${exercise.taskId}`} className={className} key={index}>
      <h2 className='task-name'>
        <span className='task-lvl'>{exercise.level} lvl</span> {exercise.taskName}
      </h2>
      <span className='task-lang'>{exercise.lang}</span>

      {exercise.testId != undefined ? isCompleted(exercise.testId) && (<img className='check-mark' src={CheckMarkIcon}/>) : isCompleted(exercise.taskId) && (<img className='check-mark' src={CheckMarkIcon}/>)}
    </Link>
  )
}

export default ExerciseItem
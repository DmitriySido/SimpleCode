import { ITask, ITest, IUser } from '../../../utils/interfaces';
import React from 'react';
import ExerciseList from '../ExerciseList/ExerciseList';

interface TaskProps {
  testJS: ITest[],
  textTasks: ITask[],
  savedUserData: IUser,
}

const TasksList: React.FC<TaskProps> = ({ testJS, textTasks, savedUserData }) => {
  return (
    <ExerciseList testJS={testJS} textTasks={textTasks} savedUserData={savedUserData} />
  );
};

export default TasksList;

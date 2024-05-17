import React from "react"
import { ITask, ITest, IUser } from "../../../utils/interfaces";
import ExerciseList from "../ExerciseList/ExerciseList";


interface TestsProps {
  testJS: ITest[],
  textTasks: ITask[],
  savedUserData: IUser,
}

const Tests: React.FC<TestsProps> = ({ testJS, textTasks, savedUserData }) => {
  return(
    <ExerciseList testJS={testJS} textTasks={textTasks} savedUserData={savedUserData} />
  )
}

export default Tests
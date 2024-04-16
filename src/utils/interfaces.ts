interface Steps{
  step1:  string,
  step2: string,
  step3?: string,
  step4?: string,
  step5?: string,
  step6?: string,
  step7?: string,
}

export interface ITask {
  task: string,
  expectedText: string,
  initialCode: string,
  answerCode: string,
  answer: string | number | boolean,
  taskId: string,
  lang: string,
  taskName: string,
  level: number,
  id: string,
  steps: Steps,
  addExperience: number
}

export interface ITest {
  task: string,
  testId: string,
  lang: string,
  taskName: string,
  level: number,
  id: string,
  code: string,
  answer: string,
  moreAnswer: string[],
  clue: string,
  addExperience: number
}

export interface IUser {
  userName: string,
  userPassword: string,
  userLevel: number,
  userExperience: number,
  idCompletedTasks: string[],
  checkInTime: string,
}
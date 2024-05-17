import { ITask, ITest } from "./interfaces"


export const LevelChangeLogic = (selectedItem: ITask | ITest, selectedItemID: string) => {
  const savedUserDataString = localStorage.getItem('userData')
  const savedUserData = savedUserDataString !== null ? JSON.parse(savedUserDataString) : null

  if(!savedUserData.idCompletedTasks.includes(selectedItemID)){
    savedUserData.userExperience += selectedItem.addExperience
    savedUserData.idCompletedTasks.push(selectedItemID)

    switch (true) {
      case (savedUserData.userExperience >= 20):
        savedUserData.userLevel = 7
        break;
      case (savedUserData.userExperience >= 70):
        savedUserData.userLevel = 6
        break;
      case (savedUserData.userExperience >= 100):
        savedUserData.userLevel = 5
        break;
      case (savedUserData.userExperience >= 140):
        savedUserData.userLevel = 4
        break;
      case (savedUserData.userExperience >= 180):
      savedUserData.userLevel = 3
        break;
      case (savedUserData.userExperience >= 220):
      savedUserData.userLevel = 2
        break;
      case (savedUserData.userExperience >= 250):
      savedUserData.userLevel = 1
        break;
      default:
        break;
    }

    localStorage.setItem('userData', JSON.stringify(savedUserData));
  }
}
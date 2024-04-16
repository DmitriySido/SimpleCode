

const AddExperienceFunc = () => {
  const savedUserDataString = localStorage.getItem('userData');
  const savedUserData = savedUserDataString !== null ? JSON.parse(savedUserDataString) : null;
  

  if(savedUserData.userExperience >= 10){
    savedUserData.userLevel = 7
  }else if(savedUserData.userExperience >= 70){
    savedUserData.userLevel = 6
  }else if(savedUserData.userExperience >= 100){
    savedUserData.userLevel = 5
  }else if(savedUserData.userExperience >= 140){
    savedUserData.userLevel = 4
  }else if(savedUserData.userExperience >= 170){
    savedUserData.userLevel = 3
  }else if(savedUserData.userExperience >= 210){
    savedUserData.userLevel = 2
  }else if(savedUserData.userExperience >= 250){
    savedUserData.userLevel = 1
  }
  localStorage.setItem('userData', JSON.stringify(savedUserData));
}

export {AddExperienceFunc}
import RegistrationPopup from '../../Popups/RegistrationPopup/RegistrationPopup';
import AboutUser from './AboutUser/AboutUser'
import './Profile.scss'
import Stats from './Stats/Stats'

const Profile = () => {

  const savedUserDataString = localStorage.getItem('userData'); // Получаем строку данных из localStorage
  const savedUserData = JSON.parse(savedUserDataString); // Парсим строку в объект

  console.log(savedUserData.userName)

  return(
    <div className='profile content'>
      <p>Ваши очки: {savedUserData.userExperience}</p>
      {savedUserData.userName === 'user78534392' ? <RegistrationPopup/> : ''}
      <AboutUser savedUserData={savedUserData}/>

      <Stats />
    </div>
  )
}

export default Profile
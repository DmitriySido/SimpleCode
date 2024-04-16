import './AboutUser.scss'

const AboutUser = ({savedUserData}) => {
  return(
    <div className='about-user'>
      <div className='user-foto'>
        foto
      </div>

      <span className='user-lvl'>{savedUserData.userLevel} lvl</span>
      
      <div className='column column-1'>
        <h3><span>Имя: </span>{savedUserData.userName}</h3>
        <h3><span>Клан: </span>Неизвестный</h3>
      </div>

      <div className='column column-2'>
        <h3><span>Участник c: </span>{savedUserData.checkInTime} г.</h3>
      </div>

      <div className='column column-3'>
        <h3><span>Следующий: </span>0</h3>
        <h3><span>Последователи: </span>0</h3>
        <h3><span>Союзники: </span>0</h3>
      </div>
    </div>
  )
}

export default AboutUser
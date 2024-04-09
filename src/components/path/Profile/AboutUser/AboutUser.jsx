import './AboutUser.scss'

const AboutUser = () => {
  return(
    <div className='about-user'>
      <div className='user-foto'>
        foto
      </div>

      <span className='user-lvl'>7 lvl</span>
      
      <div className='column column-1'>
        <h3><span>Имя: </span>Дмитрий</h3>
        <h3><span>Клан: </span>Неизвестный</h3>
      </div>

      <div className='column column-2'>
        <h3><span>Участник c: </span>Aпрель 2023 г.</h3>
        <h3><span>Последний визит: </span>Mарт 2024 г.</h3>
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
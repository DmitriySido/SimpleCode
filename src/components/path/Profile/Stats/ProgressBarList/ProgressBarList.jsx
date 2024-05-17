import ProgressBar from "../ProgressBar/ProgressBar"

const ProgressBarList = () => {
  const levels = [ 8, 7, 6 ]

  return(
    <ul className="progress-bar__list">
      {
        levels.map((lvl, index)=>{
          return(
            <li className="progress-bar__item" key={index + 'lvl'}>
              <ProgressBar progressBarLvl={lvl}/>
            </li>
          )
        })
      }
    </ul>
  )
}

export default ProgressBarList
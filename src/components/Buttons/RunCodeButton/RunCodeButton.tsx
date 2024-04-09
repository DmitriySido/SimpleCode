import React, { useState, useEffect } from 'react';
import './RunCodeButton.scss';

interface RunCodeButtonProps  {
  executeCode: () => void
}

const RunCodeButton: React.FC<RunCodeButtonProps> = ({ executeCode }) => {
  const [progress, setProgress] = useState<number>(0);
  const [resetProgress, setResetProgress] = useState<boolean>(false);

  const handleButtonClick: () => void = () =>{
    setResetProgress(false);
    setProgress(0);

    const interval: number = window.setInterval(() => {
      setProgress((prevProgress: number) => {
        if (prevProgress < 100) {
          return prevProgress + 1;
        } else {
          window.clearInterval(interval);
          setResetProgress(true);
          return prevProgress;
        }
      });
    }, 20);
  };

  useEffect(() => {
    if (resetProgress) {
      const resetTimeout: ReturnType<typeof setTimeout> = setTimeout(() => {
        setProgress(0);
        setResetProgress(false);
      }, 100);

      progress === 100 && executeCode()
      return () => clearTimeout(resetTimeout);
    }
  }, [resetProgress, progress, executeCode]);

  return (
    <div className='button__progress-bar__wrapper' onClick={handleButtonClick}>
      <div className='button__progress-bar'>
        <div className='progress-text'>{progress === 0 ? 'Выполнить код' : progress + '%'}</div>
        <div className='progress-inner' style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default RunCodeButton;

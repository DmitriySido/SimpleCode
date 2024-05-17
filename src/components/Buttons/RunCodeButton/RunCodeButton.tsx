import React, { useState, useEffect, useRef } from 'react';
import './RunCodeButton.scss';

interface RunCodeButtonProps  {
  executeCode: () => void
}

const RunCodeButton: React.FC<RunCodeButtonProps> = ({ executeCode }) => {
  const [progress, setProgress] = useState<number>(0);
  const resetProgressRef = useRef<boolean>(false);

  const handleButtonClick: () => void = () =>{
    resetProgressRef.current = false;
    setProgress(0);

    const interval: number = window.setInterval(() => {
      setProgress((prevProgress: number) => {
        if (prevProgress < 100) {
          return prevProgress + 1;
        } else {
          window.clearInterval(interval);
          resetProgressRef.current = true;
          return prevProgress;
        }
      });
    }, 20);
  };

  useEffect(() => {
    if (resetProgressRef) {
      const resetTimeout: ReturnType<typeof setTimeout> = setTimeout(() => {
        setProgress(0);
        resetProgressRef.current = false;
      }, 100);

      progress === 100 && executeCode()
      return () => clearTimeout(resetTimeout);
    }
  }, [resetProgressRef, progress, executeCode]);

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

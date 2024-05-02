import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { icons } from '../../assets/icons';
import './Timer.scss';


const Timer = ({playing, label, bg, colour, timerMin, resetTimer, startTimer, setPlaying, setFinished, timerKey, setTimerKey, setShowMessage, sessionLog, setSessionLog, activeTimer}) => {

  const children = ({remainingTime}) => {
    let mins = Math.floor(remainingTime/60)
    let secs = remainingTime%60
    if (secs <10 ) {
      secs = '0' + secs
    }

    return `${mins} : ${secs}`
  }

  const handleComplete = () => {
    setPlaying(false);
    setFinished(true);
  
    setTimerKey(prevKey => prevKey + 1);
    resetTimer();
    setShowMessage(true);


    const updatedLog = {...sessionLog};
    updatedLog[activeTimer.type] += 1;
    setSessionLog(updatedLog);
    // setFinished(false);
  }



  return (
    <div className='timer' style={{ backgroundColor: bg}}>
      <span className='title-timer' style={{ color: colour}}>{label}</span>

{/*      <div className='timer-countdown'>
        <span>{timerMin === 0 ? '00' : (timerMin < 10 ? '0'+ timerMin : timerMin)}</span>
        <span> : </span> 
        <span>{timerSec === 0 ? '00' : (timerSec < 10 ? '0'+ timerSec : timerSec)}</span>
      </div>
  */}



      <CountdownCircleTimer
      key={timerKey}
      isPlaying={playing}
      // animate={startTimer}
      duration={timerMin*60}
      colors={['#fff']}
      strokeWidth={7}
      trailColor='rgba(255, 255, 255, 0.35)'
      onComplete={handleComplete}
    >
      {children}
    </CountdownCircleTimer>

    <div className='pomodoro-controls'>
      <button className='btn-control-timer btn-play-pause' onClick={startTimer}>{playing ? icons.pause.svg : icons.start.svg}</button>
      <button className='btn-control-timer btn-reset-timer' onClick={resetTimer}>{icons.reset.svg}</button>
    </div>
     
    </div>
  )
}

export default Timer

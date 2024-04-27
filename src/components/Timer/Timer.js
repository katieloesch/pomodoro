import React from 'react'
import { icons } from '../../assets/icons'
import './Timer.scss'


const Timer = ({playing, type, label, timerMin, timerSec, resetTimer, startTimer}) => {

  console.log(type)
  return (
    <div className='timer'>
      <span className='title-timer'>{label}</span>

      <div className='timer-countdown'>
        <span>{timerMin === 0 ? '00' : (timerMin < 10 ? '0'+ timerMin : timerMin)}</span>
        <span> : </span> 
        <span>{timerSec === 0 ? '00' : (timerSec < 10 ? '0'+ timerSec : timerSec)}</span>
      </div>

      <div className='pomodoro-controls'>
        <button className='btn-control-timer btn-play-pause' onClick={startTimer}>{playing ? icons.pause.svg : icons.start.svg}</button>
        <button className='btn-control-timer btn-reset-timer' onClick={resetTimer}>{icons.reset.svg}</button>
      </div>
     
    </div>
  )
}

export default Timer

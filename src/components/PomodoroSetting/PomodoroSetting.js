import React from 'react'
import { icons } from '../../assets/icons'
import './PomodoroSetting.scss'

const PomodoroSetting = ({ label, type, value }) => {
  return (
    <div className={`pomodoro-setting pomodoro-setting-${type}`}>
        <label className='setting-label'>{label}</label>
        <div className='setting-btns'>
            <button className='btn-arrow btn-up'>{icons.upArrow.svg}</button>
            <input value={value}></input>
            <button className='btn-arrow btn-down'>{icons.downArrow.svg}</button>
        </div>
       
    </div>
  )
}

export default PomodoroSetting

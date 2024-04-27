import React from 'react'
import { icons } from '../../assets/icons'
import './PomodoroSetting.scss'

const PomodoroSetting = ({ label, type, value, id, updateSettings, setTimer }) => {

  const handleClick = () => {
    if (id === 3) {
      return;
    } else {
      setTimer(id)
    }
  }

  return (
    <div className={`pomodoro-setting pomodoro-setting-${type}`}>
        <label className={`setting-label label-${type}`} onClick={handleClick}>{label}</label>

        <div className='setting-btns'>
            <button className='btn-arrow btn-up' onClick={() => updateSettings('increase', id)}>{icons.upArrow.svg}</button>
            <input value={value}></input>
            <button className='btn-arrow btn-down' onClick={() => updateSettings('decrease', id)}>{icons.downArrow.svg}</button>
        </div>

        <span className='unit'>{type !== 'interval' ? 'mins' : 'pomodoros'}</span>
       
    </div>
  )
}

export default PomodoroSetting

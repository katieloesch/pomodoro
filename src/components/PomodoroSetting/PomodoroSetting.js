import React from 'react'
import { icons } from '../../assets/icons'
import './PomodoroSetting.scss'

const PomodoroSetting = ({ label, type, value, id, bg, colour ,settings, updateSettings, setTimerId, setActiveTimer, setTimerSec }) => {

  const handleClick = () => {
    if (id === 3) {
      return;
    } else {
      setTimerId(id);
      setActiveTimer(settings[id]);
      setTimerSec(0)
    }
  }

  return (
    <div className={`pomodoro-setting pomodoro-setting-${type}`} style={{ backgroundColor: bg}}>
        <label className={`setting-label label-${type}`} onClick={handleClick} style={{ color: colour}}>{label}</label>

        <div className='setting-btns'>
            <button className='btn-arrow btn-up' onClick={() => updateSettings('increase', id)}>{icons.upArrow.svg}</button>
            <span>{value}</span>
            <button className='btn-arrow btn-down' onClick={() => updateSettings('decrease', id)}>{icons.downArrow.svg}</button>
        </div>

        <span className='unit' style={{ color: colour}}>{type !== 'interval' ? 'mins' : 'pomodoros'}</span>
       
    </div>
  )
}

export default PomodoroSetting

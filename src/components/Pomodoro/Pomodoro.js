import React, { useState } from 'react'
import Timer from './../Timer/Timer'
import PomodoroSetting from '../PomodoroSetting/PomodoroSetting'
import './Pomodoro.scss'

const Pomodoro = () => {

    const defaultSettings = [
        {
            id: 0,
            type: 'session',
            label: 'Pomodoro',
            value: 25,
            min: 1,
            max: 100
        },
        {
            id: 1,
            type: 'short-break',
            label: 'Short Break',
            value: 5,
            min: 1,
            max: 100
        },
        {
            id: 2,
            type: 'long-break',
            label: 'Long Break',
            value: 30,
            min: 1,
            max: 100
        },
        {
            id: 3,
            type: 'interval',
            label: 'Long Break After',
            value: 4,
            min: 1,
            max: 100
        }
    ]
        
    const [settings, setSettings] = useState(defaultSettings)
    const [timer, setTimer] = useState(0)
    const [playing, setPlaying] = useState(false)

    const updateSettings = (action, index) => {
        const setting = settings[index]

        // incrementing settings
        if (action === 'decrease' && setting.value === setting.min) {
            return;
        }
        if (action === 'decrease') {
            let updatedSettings = [...settings];
            updatedSettings[index].value -= 1;
            setSettings(updatedSettings);  
        }

        //decrementing settings
        if (action === 'increase' && setting.value === setting.max) {
            return;
        }
        if (action === 'increase') {
            let updatedSettings = [...settings];
            updatedSettings[index].value += 1;
            setSettings(updatedSettings);  
        }
    }

    const resetTimer = () => {
        setSettings(defaultSettings)
        setTimer(0)
        setPlaying(false)
    }

    const decreaseTimerMin = () => {
        // let updatedSettings = [...settings];
        // updatedSettings[timer].value -= 1;
        // setSettings(updatedSettings); 

        // switch() {}
    }

    const startTimer = () => {
        // setPlaying(!playing)

        // let intervalId = setInterval(decreaseTimer,1000)
    }

  return (
    <div className='pomodoro'>

        <h1 className='title-pomodoro'>Pomodoro Timer</h1>

        <Timer type={settings[timer].type} label={settings[timer].label} playing={playing} timerMin={settings[timer].value} timerSec={0} resetTimer={resetTimer} startTimer={startTimer}/>

        <div className='pomodoro-settings'>
            {settings && settings.map((setting) => (
                <PomodoroSetting label={setting.label} type={setting.type} value={setting.value} id={setting.id} updateSettings={updateSettings} setTimer={setTimer} key={`setting-${setting.id}`} />
            ))}   
        </div>
        
        <div className='pomodoro-instructions'>
            <span>What is the Pomodoro Technique?</span>
        </div>

    </div>
  )
}

export default Pomodoro

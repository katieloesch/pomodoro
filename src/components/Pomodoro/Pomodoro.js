import React, { useState } from 'react'
import Timer from './../Timer/Timer'
import PomodoroSetting from '../PomodoroSetting/PomodoroSetting'
import './Pomodoro.scss'

const Pomodoro = () => {

    const defaultSettings = [
        {
            type: 'session',
            label: 'Pomodoro',
            value: 25,
            min: 1,
            max: 500,
            id: 0
        },
        {
            type: 'short-break',
            label: 'Short Break',
            value: 5,
            min: 1,
            max: 500,
            id: 1
        },
        {
            type: 'long-break',
            label: 'Long Break',
            value: 30,
            min: 1,
            max: 500,
            id: 2
        },
        {
            type: 'interval',
            label: 'Long Break After',
            value: 4,
            min: 0,
            max: 100,
            id: 3
        }
    ]

    const defaultTimer = {
        playing: false,
        type: 'session',
        label: 'Pomodoro',
        timerMin: 25,
        timerSec: 0
    }

    const [settings, setSettings] = useState(defaultSettings)
    const [timer, setTimer] = useState(defaultTimer)

    const updateSettings = (action, index) => {
        const setting = settings[index]
        console.log(setting)

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

  return (
    <div className='pomodoro'>

        <h1 className='title-pomodoro'>Pomodoro Timer</h1>

        <Timer type={timer.type} label={timer.label} playing={timer.playing} timerMin={timer.timerMin} timerSec={timer.timerSec} />

        <div className='pomodoro-settings'>
            {settings && settings.map((setting) => (
                <PomodoroSetting label={setting.label} type={setting.type} value={setting.value} id={setting.id} updateSettings={updateSettings} key={`setting-${setting.id}`} />
            ))}   
        </div>
        
        <div className='pomodoro-instructions'>
            <span>What is the Pomodoro Technique?</span>
        </div>

    </div>
  )
}

export default Pomodoro

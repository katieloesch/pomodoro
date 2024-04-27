import React, { useState } from 'react'
import Timer from './../Timer/Timer'
import PomodoroSetting from '../PomodoroSetting/PomodoroSetting'
import { icons } from '../../assets/icons'
import './Pomodoro.scss'

const Pomodoro = () => {

    const defaultSettings = [
        {
            type: 'session',
            label: 'Pomodoro',
            value: 25
        },
        {
            type: 'short-break',
            label: 'Short Break',
            value: 5
        },
        {
            type: 'long-break',
            label: 'Long Break',
            value: 30
        },
        {
            type: 'interval',
            label: 'Long Break Interval',
            value: 4
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

  return (
    <div className='pomodoro'>

        <h1 className='title-pomodoro'>Pomodoro Timer</h1>

        <Timer type={timer.type} label={timer.label} playing={timer.playing} timerMin={timer.timerMin} timerSec={timer.timerSec} />

        <div className='pomodoro-settings'>
            {settings.map((setting) => (
                <PomodoroSetting label={setting.label} type={setting.type} value={setting.value} key={`setting-${setting.type}`} />
            ))}   
        </div>
        
        <div className='pomodoro-instructions'>
            <span>What is the Pomodoro Technique?</span>
        </div>

    </div>
  )
}

export default Pomodoro

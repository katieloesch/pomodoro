import React, { useEffect, useState } from 'react'
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
        
    const [settings, setSettings] = useState(defaultSettings);

    const [timerId, setTimerId] = useState(0);
    const [activeTimer, setActiveTimer] = useState(defaultSettings[0])

    const [timerSec, setTimerSec] = useState(0);
    const [playing, setPlaying] = useState(false);


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
        setTimerSec(0)
        setActiveTimer(settings[timerId])
        setPlaying(false)
    }


    const startTimer = () => {
        setPlaying(!playing);
    };

    useEffect(() => {
        if (playing) {
           const intervalTimer = setInterval(() => {

            // Decrease timer seconds
            if (timerSec > 0) {
                setTimerSec(timerSec => timerSec-1)
            }

            // Decrease timer minutes
            if (timerSec === 0) {
                setTimerSec(59)
                let updatedTimer = {...activeTimer};
                updatedTimer.value -= 1;
                setActiveTimer(updatedTimer);
            }

            // Check if timer has finished
            if (activeTimer.value === 0 && timerSec === 0) {
                setPlaying(false)
                alert(`${activeTimer.label} finished!`)

                //skip to next phase
                //reset timer
                //change log
                resetTimer();
            }

           }, 1000)
           return () => clearInterval(intervalTimer)
        }
    }, [playing, timerSec, activeTimer, resetTimer])
    

  return (
    <div className='pomodoro'>

        <h1 className='title-pomodoro'>Pomodoro Timer</h1>

        <Timer type={settings[timerId].type} label={settings[timerId].label} playing={playing} timerMin={activeTimer.value} timerSec={timerSec} resetTimer={resetTimer} startTimer={startTimer}/>

        <div className='pomodoro-settings'>
            {settings && settings.map((setting) => (
                <PomodoroSetting label={setting.label} type={setting.type} value={setting.value} id={setting.id} settings={settings} updateSettings={updateSettings} setTimerId={setTimerId} setActiveTimer={setActiveTimer} setTimerSec={setTimerSec} key={`setting-${setting.id}`} />
            ))}   
        </div>
        
        <div className='pomodoro-instructions'>
            <span>What is the Pomodoro Technique?</span>
        </div>

    </div>
  )
}

export default Pomodoro

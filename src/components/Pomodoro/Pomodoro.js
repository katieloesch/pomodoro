import React, { useEffect, useState } from 'react';
import Timer from './../Timer/Timer';
import PomodoroSetting from '../PomodoroSetting/PomodoroSetting';
import { colours } from '../../assets/colours';
import { icons } from '../../assets/icons';
import './Pomodoro.scss';

const Pomodoro = () => {

    const defaultSettings = [
        {
            id: 0,
            type: 'session',
            label: 'Pomodoro',
            value: 25,
            min: 1,
            max: 100,
            colour: colours.pink,
            bg: colours.red,
        },
        {
            id: 1,
            type: 'short-break',
            label: 'Short Break',
            value: 1,
            min: 1,
            max: 100,
            bg: colours.blue,
            colour: colours.lightBlue
        },
        {
            id: 2,
            type: 'long-break',
            label: 'Long Break',
            value: 30,
            min: 1,
            max: 100,
            bg: colours.green,
            colour: colours.lightGreen
        },
        {
            id: 3,
            type: 'interval',
            label: 'Long Break After',
            value: 4,
            min: 1,
            max: 100,
            bg: colours.green,
            colour: colours.lightGreen
        }
    ]

    const defaultLog = {
        session: 0,
        'short-break': 0,
        'long-break': 0
    }



    const [settings, setSettings] = useState(defaultSettings);
    const [timerId, setTimerId] = useState(0);
    const [activeTimer, setActiveTimer] = useState(defaultSettings[0]);
    const [timerSec, setTimerSec] = useState(0);
    const [playing, setPlaying] = useState(false);
    const [sessionLog, setSessionLog] = useState(defaultLog);
    const [showSettings, setShowSettings] = useState(false);
    const [finished, setFinished] = useState(false);

    const [timerKey, setTimerKey] = useState(0);



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
        // setTimerSec(0)
        const newActiveTimer = settings[timerId];
        setActiveTimer(newActiveTimer); 
        console.log(activeTimer);
        setPlaying(false);
    }


    const startTimer = () => {
        setPlaying(!playing);
    };

    const switchTimer = (id) => {
        setTimerId(id);
        setActiveTimer(settings[id]);
        setTimerSec(0);
    }


    useEffect(() => {
        if (playing) {
           const intervalTimer = setInterval(() => {

            // Check if timer has finished
            if (finished) {
                setPlaying(false);
                alert(`${activeTimer.label} finished!`);
                setFinished(false);


                // update the log of completed sessions
                const updatedLog = {...sessionLog};
                updatedLog[activeTimer.type] += 1;
                setSessionLog(sessionLog => updatedLog);
                console.log(updatedLog)
               

                //skip to next session

                if (activeTimer.type === 'session' && updatedLog.session%settings[3].value !== 0) {
                    console.log('start short break')
                    setActiveTimer(settings[1]);
                    setPlaying(true);
                } else if (activeTimer.type === 'session' && updatedLog.session%settings[3].value === 0) {
                    console.log('start long break')
                    setActiveTimer(settings[2]);
                    setPlaying(true);
                } else if (activeTimer.type === 'short-break' || activeTimer.type === 'long-break') {
                    console.log('start POMODORO')
                    setActiveTimer(settings[0]);
                    setPlaying(true);
                }
            }

           }, 1000)
           return () => clearInterval(intervalTimer)
        }
    }, [playing, finished, settings, timerSec, activeTimer, sessionLog])
    



    // useEffect(() => {
    //     if (playing) {
    //        const intervalTimer = setInterval(() => {

    //         // Decrease timer seconds
    //         // if (timerSec > 0) {
    //         //     setTimerSec(timerSec => timerSec-1)
    //         // }

    //         // // Decrease timer minutes
    //         // if (timerSec === 0) {
    //         //     setTimerSec(59)
    //         //     let updatedTimer = {...activeTimer};
    //         //     updatedTimer.value -= 1;
    //         //     setActiveTimer(updatedTimer);
    //         // }

    //         // Check if timer has finished
    //         if (activeTimer.value === 0 && timerSec === 0) {
    //             setPlaying(false)
    //             alert(`${activeTimer.label} finished!`)

    //             // update the log of completed sessions
    //             const updatedLog = {...sessionLog};
    //             updatedLog[activeTimer.type] += 1;
    //             setSessionLog(sessionLog => updatedLog);
    //             console.log(updatedLog)
    //             resetTimer();

    //             //skip to next session

    //             if (activeTimer.type === 'session' && updatedLog.session%settings[3].value !== 0) {
    //                 console.log('start short break')
    //                 setActiveTimer(settings[1]);
    //                 setPlaying(true);
    //             } else if (activeTimer.type === 'session' && updatedLog.session%settings[3].value === 0) {
    //                 console.log('start long break')
    //                 setActiveTimer(settings[2]);
    //                 setPlaying(true);
    //             } else if (activeTimer.type === 'short-break' || activeTimer.type === 'long-break') {
    //                 console.log('start POMODORO')
    //                 setActiveTimer(settings[0]);
    //                 setPlaying(true);
    //             }
    //         }

    //        }, 1000)
    //        return () => clearInterval(intervalTimer)
    //     }
    // }, [playing, settings, timerSec, activeTimer, resetTimer, sessionLog])
    

  return (
    <div className='pomodoro' style={{ backgroundColor: activeTimer.colour}}>

        <section className='pomodoro-left-section'>
            <Timer type={settings[timerId].type} label={activeTimer.label} bg={activeTimer.bg} colour={activeTimer.colour} playing={playing} timerMin={activeTimer.value} timerSec={timerSec} resetTimer={resetTimer} startTimer={startTimer} setPlaying={setPlaying} finished={finished} setFinished={setFinished} timerKey={timerKey} setTimerKey={setTimerKey}/>
        </section>

        <section className='pomodoro-right-section'>

                <h1 className='title-pomodoro' style={{ color: activeTimer.bg}}>Pomodoro Timer</h1>

                <div className={`pomodoro-timers`}>
                    <button className={`pomodoro-timer timer-${settings[0].type}`} onClick={() => switchTimer(0)} style={{ color: settings[0].colour, backgroundColor: settings[0].bg, border: `1px solid ${settings[0].colour}`}}>{settings[0].label}</button>        
                    <button className={`pomodoro-timer timer-${settings[1].type}`} onClick={() => switchTimer(1)} style={{ color: settings[1].colour, backgroundColor: settings[1].bg, border: `1px solid ${settings[1].colour}`}}>{settings[1].label}</button>        
                    <button className={`pomodoro-timer timer-${settings[2].type}`} onClick={() => switchTimer(2)} style={{ color: settings[2].colour, backgroundColor: settings[2].bg, border: `1px solid ${settings[2].colour}`}}>{settings[2].label}</button>        
                </div>

                <div className='pomodoro-btns'>
                    <button className='btn-show-settings' onClick={() => setShowSettings(true)} style={{ color: activeTimer.bg}}>{icons.settings.svg}</button>
                    <button className='btn-mute' style={{ color: activeTimer.bg}}>{icons.mute.svg}</button>
                    <button className='btn-show-info' style={{ color: activeTimer.bg}}>{icons.info.svg}</button>
                </div>




            {/*showSettings && <div className='pomodoro-settings'>
            {settings && settings.map((setting) => (
                <PomodoroSetting label={setting.label} type={setting.type} value={setting.value} id={setting.id} bg={setting.bg} colour={setting.colour} settings={settings} updateSettings={updateSettings} setTimerId={setTimerId} setActiveTimer={setActiveTimer} setTimerSec={setTimerSec} key={`setting-${setting.id}`} />
            ))}   
        </div> */}
    
        </section>
     
        


    </div>
  )
}

export default Pomodoro

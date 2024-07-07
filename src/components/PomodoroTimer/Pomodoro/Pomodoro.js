import React, { useState } from "react";
import { motion } from "framer-motion";

import { PomodoroSetting, SettingsModal, Timer, Tomatoes } from "../";
import { Notification } from "../../Shared";

import { colours } from "../../../assets/colours";
import { pomodoroIcons } from "../../../assets/icons/icons_pomodoro";
import "./Pomodoro.scss";

const Pomodoro = ({ startConfetti, setShowInfoModal }) => {
  const defaultSettings = [
    {
      id: 0,
      type: "session",
      label: "Pomodoro",
      value: 1,
      min: 1,
      max: 100,
      colour: colours.pink,
      bg: colours.red,
    },
    {
      id: 1,
      type: "short-break",
      label: "Short Break",
      value: 1,
      min: 1,
      max: 100,
      bg: colours.green,
      colour: colours.lightGreen,
    },
    {
      id: 2,
      type: "long-break",
      label: "Long Break",
      value: 30,
      min: 1,
      max: 100,
      bg: colours.blue,
      colour: colours.lightBlue,
    },
    {
      id: 3,
      type: "interval",
      label: "Long Break After",
      value: 4,
      min: 1,
      max: 100,
      bg: colours.blue,
      colour: colours.lightBlue,
    },
  ];

  const defaultLog = {
    session: 0,
    "short-break": 0,
    "long-break": 0,
  };

  const [settings, setSettings] = useState(defaultSettings);
  const [timerId, setTimerId] = useState(0);
  const [activeTimer, setActiveTimer] = useState(defaultSettings[0]);
  const [playing, setPlaying] = useState(false);
  const [sessionLog, setSessionLog] = useState(defaultLog);

  const [finished, setFinished] = useState(false);
  const [timerKey, setTimerKey] = useState(0);

  //modals
  const [showSettings, setShowSettings] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const openSettings = () => {
    setShowSettings(true);
  };

  const closeSettings = () => {
    setShowSettings(false);
    console.log("closing...");
  };

  //framer-motion
  const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const updateSettings = (action, index) => {
    const setting = settings[index];

    // incrementing settings
    if (action === "decrease" && setting.value === setting.min) {
      return;
    }
    if (action === "decrease") {
      let updatedSettings = [...settings];
      updatedSettings[index].value -= 1;
      setSettings(updatedSettings);
    }

    //decrementing settings
    if (action === "increase" && setting.value === setting.max) {
      return;
    }
    if (action === "increase") {
      let updatedSettings = [...settings];
      updatedSettings[index].value += 1;
      setSettings(updatedSettings);
    }
  };

  const resetTimer = () => {
    // setTimerSec(0)
    console.log("running reset timer function");
    const newActiveTimer = settings[timerId];
    setActiveTimer(newActiveTimer);
    setTimerKey((prevKey) => prevKey + 1);
    setPlaying(false);
    console.log(activeTimer);
  };

  const startTimer = () => {
    setPlaying(!playing);
    setShowMessage(false);
  };

  const switchTimer = (id) => {
    setShowMessage(false);
    setPlaying(false);
    setTimerId(id);
    setTimerKey((prevKey) => prevKey + 1);
    setActiveTimer(settings[id]);
  };

  // useEffect(() => {

  //         // Check if timer has finished
  //         if (finished) {
  //             console.log('USE EFFECT')

  //             const updatedLog = {...sessionLog};
  //             updatedLog[activeTimer.type] += 1;
  //             setSessionLog(updatedLog);
  //             setFinished(false);

  //         }

  // }, [ finished, activeTimer, setFinished])

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

  // useEffect(() => {
  //     setTimeout(() => {
  //         setShowMessage(true)
  //     }, 5000)
  // }, [setShowMessage])

  return (
    <div className="pomodoro" style={{ backgroundColor: activeTimer.colour }}>
      <h1 className="pomodoro-title" style={{ color: activeTimer.bg }}>
        Pomodoro Timer
      </h1>
      <Tomatoes count={sessionLog.session} activeTimer={activeTimer} />
      <section className="pomodoro-timer">
        <Timer
          playing={playing}
          label={activeTimer.label}
          bg={activeTimer.bg}
          colour={activeTimer.colour}
          timerMin={activeTimer.value}
          resetTimer={resetTimer}
          startTimer={startTimer}
          setPlaying={setPlaying}
          setFinished={setFinished}
          timerKey={timerKey}
          setTimerKey={setTimerKey}
          setShowMessage={setShowMessage}
          sessionLog={sessionLog}
          setSessionLog={setSessionLog}
          activeTimer={activeTimer}
          startConfetti={startConfetti}
        />
      </section>

      <section className="pomodoro-controls">
        <div className={"pomodoro-controls__btns"}>
          <button
            className={`pomodoro-controls__btn timer-${settings[0].type}`}
            onClick={() => switchTimer(0)}
            style={{
              color: settings[0].colour,
              backgroundColor: settings[0].bg,
              border: `1px solid ${settings[0].colour}`,
            }}
          >
            {settings[0].label}
          </button>
          <button
            className={`pomodoro-controls__btn timer-${settings[1].type}`}
            onClick={() => switchTimer(1)}
            style={{
              color: settings[1].colour,
              backgroundColor: settings[1].bg,
              border: `1px solid ${settings[1].colour}`,
            }}
          >
            {settings[1].label}
          </button>
          <button
            className={`pomodoro-controls__btn timer-${settings[2].type}`}
            onClick={() => switchTimer(2)}
            style={{
              color: settings[2].colour,
              backgroundColor: settings[2].bg,
              border: `1px solid ${settings[2].colour}`,
            }}
          >
            {settings[2].label}
          </button>
        </div>

        <div className="pomodoro-controls__settings">
          <button className="btn-mute" style={{ color: activeTimer.bg }}>
            {pomodoroIcons.sound.svg}
          </button>

          <button
            className="btn-show-info"
            onClick={() => setShowInfoModal(true)}
            style={{ color: activeTimer.bg }}
          >
            {pomodoroIcons.info.svg}
          </button>

          <button
            className="btn-show-settings"
            onClick={() => setShowSettings(true)}
            style={{ color: activeTimer.bg }}
          >
            {pomodoroIcons.settings.svg}
          </button>
        </div>

        {showMessage && (
          <Notification
            activeTimer={activeTimer}
            sessionLog={sessionLog}
            settings={settings}
            setActiveTimer={setActiveTimer}
            setPlaying={setPlaying}
            setShowMessage={setShowMessage}
            setTimerId={setTimerId}
          />
        )}

        {/*  <AnimatePresence mode='wait'>*/}
        {showSettings && (
          <motion.div
            className="backdrop"
            variants={backdrop}
            initial="hidden"
            animate="visible"
          ></motion.div>
        )}

        {/*showSettings && (
          <motion.div className="pomodoro-settings-modal">
            {settings &&
              settings.map((setting, index) => (
                <PomodoroSetting
                  label={setting.label}
                  type={setting.type}
                  value={setting.value}
                  settings={settings}
                  updateSettings={updateSettings}
                  id={setting.id}
                  key={`setting-${index}`}
                  // setTimerSec={setTimerSec}
                  setTimerId={setTimerId}
                  setActiveTimer={setActiveTimer}
                  bg={setting.bg}
                  colour={setting.colour}
                />
              ))}
            <div
              className="btn-close-modal"
              onClick={() => setShowSettings(false)}
            >
              {pomodoroIcons.close.svg}
            </div>
          </motion.div>
        )*/}

        <SettingsModal
          show={showSettings}
          onCancel={closeSettings}
          header="Settings"
          settings={settings}
          className="pomodoro-settings-modal"
          updateSettings={updateSettings}
          setTimerId={setTimerId}
          setActiveTimer={setActiveTimer}
          setShowSettings={setShowSettings}
        />

        {/*</AnimatePresence>
        
        
      <Modal
        show={showMap}
        onCancel={closeMap}
        header={address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<FormBtn onClick={closeMap}>close</FormBtn>}
      >
        <div className="map-container">
          <Map center={coordinates} zoom={15} />
        </div>
      </Modal>
        
        
        */}
      </section>
    </div>
  );
};

export default Pomodoro;

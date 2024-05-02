import React from 'react';
import './Message.scss';

const Message = ({ activeTimer, sessionLog, settings, setActiveTimer, setPlaying, setShowMessage, setTimerId }) => {

  const startNextSession = () => {
    console.log('starting new session')
    console.log(sessionLog)
    if (activeTimer.type === 'session' && sessionLog.session%settings[3].value !== 0) {
      setActiveTimer(settings[1]);
      setTimerId(1);
      console.log('new session, ', settings[1].label )
    } else if (activeTimer.type === 'session' && sessionLog.session%settings[3].value === 0) {
      setActiveTimer(settings[2]);
      console.log('new session, ', settings[2].label )

      setTimerId(2);
    } else if ((activeTimer.type === 'short-break' || activeTimer.type === 'long-break')) {
      setActiveTimer(settings[0]);
      setTimerId(0);
      console.log('new session, ', settings[0].label )

    } else {
      console.log('error')
    }
    setPlaying(true);
    setShowMessage(false)
  }

  let msg;
  let btn;
  let style;

  if (activeTimer.type === 'session' && sessionLog.session%settings[3].value !== 0) {
    msg = `You finished a Pomodoro !`
    btn = 'Start Short Break'
    style={ color: settings[1].colour, backgroundColor: settings[1].bg, border: `1px solid ${settings[1].colour}`}

  } else if (activeTimer.type === 'session' && sessionLog.session%settings[3].value === 0) {
    msg = `You finished ${settings[3].value} Pomodoros !`
    btn = 'Start Long Break'
    style={ color: settings[2].colour, backgroundColor: settings[2].bg, border: `1px solid ${settings[2].colour}`}


  } else if (activeTimer.type === 'short-break' || activeTimer.type === 'long-break') {
    msg = `${activeTimer.label} over!`
    btn = `Start next Pomodoro`
    style={ color: settings[0].colour, backgroundColor: settings[0].bg, border: `1px solid ${settings[0].colour}`}


  }

  return (
    <div className='message' style={{ color: activeTimer.colour, backgroundColor: activeTimer.bg}}>
        <p> {msg} </p>
        <button className='btn-start-next-session' style={style} onClick={startNextSession}>{btn}</button>
    </div>
  )
}

export default Message

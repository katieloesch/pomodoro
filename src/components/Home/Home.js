import React, { useState } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';
import Pomodoro from '../Pomodoro/Pomodoro';
import TodoApp from '../TodoApp/TodoApp';
import InfoModal from '../InfoModal/InfoModal'
import './Home.scss'

const Home = () => {

  const [confetti, setConfetti] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);

  const startConfetti = () => {
    setConfetti(true);
    setTimeout(() => {
      setConfetti(false);
    }, 4000);
  };

  return (
    <div className='home flex'>
        {confetti && (
            <div className="confetti-explosion">
            <ConfettiExplosion />
            </div>
        )}      

        <Pomodoro startConfetti={startConfetti} setShowInfoModal={setShowInfoModal} />
        
        <TodoApp />
        
        {showInfoModal && <InfoModal setShowInfoModal={setShowInfoModal} />}
        
      
    </div>
  )
}

export default Home

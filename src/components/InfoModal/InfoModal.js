import React from 'react';
import { icons } from '../../assets/icons';
import './InfoModal.scss'

const PomodoroModal = ({ setShowInfoModal }) => {
  return (
    <div className='info-modal'>
      <div className='btn-close-modal' onClick={() => setShowInfoModal(false)}>{icons.close.svg}</div>   

      <h3 className='info-modal-title'>What is the Pomodoro technique?</h3>
      <p></p>
      
    </div>
  )
}

export default PomodoroModal

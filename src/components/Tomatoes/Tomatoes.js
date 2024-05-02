import React from 'react'
import { icons } from '../../assets/icons';
import './Tomatoes.scss'

const Tomatoes = ({count, activeTimer}) => {
    const arr = Array.from({ length: count });

    if (count === 0) {
        return null
    } else {
        return (
            <div className='tomatoes'> 
            <span style={{color: activeTimer.bg}}>completed:&nbsp;&nbsp;</span>
             {arr.map((item, index) => {
                 return (<span key={index} className='tomato'>{icons.pomodoro.svg}&nbsp;</span>)
             })}
            </div>
        )
    }
}

export default Tomatoes

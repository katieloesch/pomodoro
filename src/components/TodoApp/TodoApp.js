import React from 'react';
import { Link } from 'react-router-dom';
import './TodoApp.scss';

const TodoApp = () => {
  return (
    <div className='todo-app'>
        <h1 className='todo-app-title flex'>Tasks</h1>
        <button className='btn-login'><Link to='/login'>login</Link></button>
        <button className='btn-register'><Link to='/register'>register</Link></button>
    </div>
  )
}

export default TodoApp

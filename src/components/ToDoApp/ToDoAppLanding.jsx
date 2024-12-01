import React from 'react'
import './ToDoAppLanding.css'
import './ToDoAppGlobal.css'
import { Link } from 'react-router-dom'

const ToDoAppLanding = () => {
  return (
    <div className='ToDoAppLanding'>
        <div className="leftCol">
          <img src="/images/todo_home.png" alt="" />
        </div>
        <div className="rightCol">
          <h1 className='heading1'>Task Management & <br /> To-Do List</h1>
          <p>This productive tool is designed to help you better manage your task project-wise conveniently!</p>
          <Link to='/todo_app/todoapp_home'><button className='primaryBtn'>Let's Start</button></Link> 
        </div>
    </div>
  )
}

export default ToDoAppLanding
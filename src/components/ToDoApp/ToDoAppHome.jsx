import React from 'react'
import './ToDoAppHome.css'
import './ToDoAppGlobal.css'
import { useNavigate } from 'react-router'

const ToDoAppHome = () => {
    const navigate = useNavigate();
  return (
    <div className='ToDoAppHome'>
        <div className="header">
        <h1 className='heading2'>Welcome to <br /> Task Management & To-Do List Application</h1>
        <p>Stay organized, boost your productivity, and achieve your goals effortlessly with TaskFlow. Whether you're managing daily errands, planning projects, or tracking long-term goals, our intuitive app is here to help.</p>
        </div>
        <div className="body">
        <div className="card" onClick={()=>{navigate('/todo_app/todolist')}}>
            <div className="text">
                <h3>Watch List</h3>
                <p>The listed tasks can be seen here to follow the project execution timely.</p>
            </div>
            <div className="image">
                <img src="https://cdn.pixabay.com/photo/2014/04/03/10/42/clipboard-311168_640.png" alt="" />
            </div>
        </div>
        <div className="card" onClick={()=>{navigate('/todo_app/createtodo')}}>
            <div className="text">
                <h3>Add Tasks</h3>
                <p>The listed tasks can be seen here to follow the project execution timely.</p>
            </div>
            <div className="image">
                <img src="https://cdn-icons-png.flaticon.com/512/3696/3696901.png" alt="" />
            </div>
        </div>


        <div className="card"  onClick={()=>{navigate('/calendar')}}>
            <div className="text">
                <h3>Watch on Calendar</h3>
                <p>The listed tasks can be seen here to follow the project execution timely.</p>
            </div>
            <div className="image">
                <img src="https://png.pngtree.com/png-clipart/20230522/original/pngtree-calendar-png-image_9167279.png" alt="" />
            </div>
            
        </div>
        </div>
    </div>
  )
}

export default ToDoAppHome
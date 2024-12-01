import React, { useRef, useState } from 'react'
import './ToDoList.css'
import './ToDoAppGlobal.css'
import { useNavigate } from 'react-router'

const ToDoList = ({ setToDoData }) => {
  const navigate = useNavigate();
  const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem('taskList')) || []);

  return (
    <div className='ToDoList'>
      {/* ------------ task list ------------- */}
      <div className="tasksContainer">
        <div className="taskList">
          <h3 className='taskListTitle'>Task List <span className='editList' onClick={()=>{navigate('/todo_app/createtodo')}} ><i class="fa-solid fa-pencil"></i> Edit List</span></h3>
          {
            taskList.length ?
            taskList.map((task, index) => {
              return (
                // --------- item by item ------------
                <div className='item'>
                  <div className="taskNumber" style={{ opacity: `${task.done ? "0.5" : "1"}` }}>
                    {index + 1}
                  </div>
                  <div className={`task`} >
                    <h4 style={{ textDecoration: `${task.done ? "line-through" : "none"}` }} >{task.textInput}</h4>
                    <p> 
                      <b>Due: </b> 
                      {
                        task.dateInput ==='' ?
                        'No due date'
                        :
                        <span>{new Date(task.dateInput).toDateString()} - {new Date(task.dateInput).toLocaleTimeString()}</span>
                      }
                    </p>
                  </div>
                </div>
              )
            })
            :
            <h2 className='noTasksTitle'>No tasks entered.</h2>
          }
        </div>
      </div>
      <button className='goToCalendarBtn' onClick={() => { navigate('/calendar') }}>Go to calendar <img src="/images/calendar2.avif" alt="" /></button>


    </div>
  )
}

export default ToDoList
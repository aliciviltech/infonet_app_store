import React from 'react'
import './CalendarModal.css'
import { useNavigate } from 'react-router'

const CalendarModal = ({ showModal, setShowModal, taskList, modalDate }) => {
    console.log(modalDate)
    console.log(taskList)
    const navigate = useNavigate();

    return (
        <div className="CalendarModalContainer">
            <div className='CalendarModal'>

                <div className="tasksContainer">
                    <div className="taskList">
                        {
                            taskList.map((task, index) => {
                                if(new Date(task.dateInput).toLocaleDateString() === new Date(modalDate).toLocaleDateString()){
                                return (
                                    <div className='item'>
                                        <div className="taskNumber" style={{ opacity: `${task.done ? "0.5" : "1"}` }}>
                                            {index + 1}
                                        </div>
                                        <div className={`task ${task.done && 'deactivate'}`} >
                                            <p style={{ textDecoration: `${task.done ? "line-through" : "none"}` }} >{task.textInput}</p>
                                            <p>{task.dateInput}</p>
                                        </div>
                                        
                                    </div>
                                )
                            }
                            })
                        }
                    </div>
                </div>
                <div className="buttons">
                    <button onClick={() => { setShowModal(false) }}>close</button>
                    <button onClick={() => { navigate('/todo_app/createtodo') }}>Open todo List</button>
                </div>
            </div>
        </div>
    )
}

export default CalendarModal
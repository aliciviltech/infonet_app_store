import React, { useRef, useState } from 'react'
import './CreateToDo.css'
import './ToDoAppGlobal.css'
import { useNavigate } from 'react-router'

const CreateToDo = ({ setToDoData }) => {
  const navigate = useNavigate();
  const inputRef = useRef(null)
  const dateInputRef = useRef(null)
  const updateBtnRef = useRef(null)
  const addBtnRef = useRef(null)
  const cancelBtnRef = useRef(null)

  const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem('taskList')) || []);

  // ------------- task input ---------------- //
  const [inputs, setInputs] = useState({
    textInput: '',
    dateInput: '',
    done: false,
  })
  const handleTaskInputF = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }
  const submitInputF = () => {
    if(inputs.textInput.trim() !== ''){
      setTaskList([...taskList, inputs])
      localStorage.setItem('taskList', JSON.stringify([...taskList, inputs]))
      setInputs({
        textInput: '',
        dateInput: '',
        done: false,
      })
    }else{
      alert('Enter a valid task')
    }
  }

  // ---------------- task list ------------------
  const [updatingIndex, setUpdatingIndex] = useState();

  // ------------- deactivate task ---------------
  const taskDoneF = (targetTask, targetIndex) => {
    const updatedTaskList = taskList.map((task, i) => {
      if (i === targetIndex) {
        return (
          { ...task, done: !task.done }
        )
      }
      return task;
    })
    setTaskList(updatedTaskList);
    localStorage.setItem('taskList', JSON.stringify(updatedTaskList))
  }

  // ----------- edit task -------------
  const editTaskF = (targetTask, targetIndex) => {
    addBtnRef.current.style.display = 'none';
    updateBtnRef.current.style.display = 'block';
    cancelBtnRef.current.style.display = 'block';
    inputRef.current.focus();
    setInputs({ textInput: targetTask.textInput, dateInput: targetTask.dateInput, });
    setUpdatingIndex(targetIndex);
  }
  // ----------- update task -------------
  const updateTaskF = () => {
    addBtnRef.current.style.display = 'block';
    updateBtnRef.current.style.display = 'none';
    cancelBtnRef.current.style.display = 'none';
    const updatedTaskList = taskList.map((task, i) => {
      if (i === updatingIndex) {
        return inputs
      }
      return task;
    })
    setTaskList(updatedTaskList);
    localStorage.setItem('taskList', JSON.stringify(updatedTaskList));
  }
  // ----------- cancel task -------------
  const cancelUpdateF = () => {
    addBtnRef.current.style.display = 'block';
    updateBtnRef.current.style.display = 'none';
    cancelBtnRef.current.style.display = 'none';
    setInputs({ textInput: '', dateInput: '', });
  }
  // ----------- delete task -------------
  const deleteTaskF = (targetIndex) => {
    const updatedTaskList = taskList.filter((task, i) => {
      return (i !== targetIndex)
    })
    setTaskList(updatedTaskList);
    localStorage.setItem('taskList', JSON.stringify(updatedTaskList));
  }

  return (
    <div className='CreateToDo'>

      {/* ------------ input area ------------ */}
      <div className="inputArea">
        <input ref={inputRef} name='textInput' value={inputs.textInput} onChange={handleTaskInputF} type="text" placeholder='Enter your task' />
        <div className="dateInputContainer">
          <p>Select Date and Time {`(optional)`} </p>
          <img className='calendarImg' src="/images/calendar2.avif" alt="calendar_img"/>
          <input ref={dateInputRef} name='dateInput' value={inputs.dateInput} onChange={handleTaskInputF} type="datetime-local" />
        </div>
        <button ref={addBtnRef} onClick={submitInputF} id='addTaskBtn'>Add Task</button>
        <button ref={updateBtnRef} id='updateBtn' onClick={updateTaskF}>Update</button>
        <button ref={cancelBtnRef} id='cancelBtn' onClick={cancelUpdateF}>Cancel</button>
      </div>

      {/* ------------ task list ------------- */}
      <div className="tasksContainer">
        <div className="taskList">
          <h3 className='taskListTitle'>Task List</h3>
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
                    {/* ----- task controls ------- */}
                    <div className="controls">
                      <button className='tertiaryBtn' onClick={() => { deleteTaskF(index) }}>delete</button>
                      <button className='tertiaryBtn' onClick={() => { editTaskF(task, index) }}>edit</button>
                      <button className='tertiaryBtn' onClick={() => taskDoneF(task, index)}>{task.done ? 'activate' : 'deactivate'}</button>
                    </div>
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

export default CreateToDo
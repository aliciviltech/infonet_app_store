import React, { useState } from 'react'
import Home from './components/Home/Home'
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Calculator from './components/Calculator/Calculator'
import Calendar from './components/Calendar/Calendar'
import TicTacToe from './components/TicTacToe/TicTacToe'
import ProgressBar from './components/ProgressBar/ProgressBar'
import WeatherApp from './components/WeatherApp/WeatherApp'
import CreateToDo from './components/ToDoApp/CreateToDo'
import ToDoAppLanding from './components/ToDoApp/ToDoAppLanding'
import ToDoAppHome from './components/ToDoApp/ToDoAppHome'
import ToDoList from './components/ToDoApp/ToDoList'

const App = () => {
  const [toDoData, setToDoData]=useState([1,2,3,4]);
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/calculator' element={<Calculator/>} />
          <Route path='/todo_app' element={<ToDoAppLanding/>} />
          <Route path='/todo_app/todoapp_home' element={<ToDoAppHome/>} />
          <Route path='/todo_app/todolist' element={<ToDoList/>} />
          <Route path='/todo_app/createtodo' element={<CreateToDo/>} />
          <Route path='/calendar' element={<Calendar toDoData={toDoData}/>} />
          <Route path='/tictactoe' element={<TicTacToe/>} />
          <Route path='/progressbar' element={<ProgressBar/>} />
          <Route path='/weatherapp' element={<WeatherApp/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
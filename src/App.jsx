import React, { useState } from 'react'
import Home from './components/Home/Home'
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Calculator from './components/Calculator/Calculator'
import ToDoApp from './components/ToDoApp/ToDoApp'
import Calendar from './components/Calendar/Calendar'
import TicTacToe from './components/TicTacToe/TicTacToe'
import ProgressBar from './components/ProgressBar/ProgressBar'
import WeatherApp from './components/WeatherApp/WeatherApp'

const App = () => {
  const [toDoData, setToDoData]=useState([1,2,3,4]);
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/calculator' element={<Calculator/>} />
          <Route path='/todo_app' element={<ToDoApp setToDoData={setToDoData}/>} />
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
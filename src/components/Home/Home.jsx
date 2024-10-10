import React from 'react'
import './Home.css'
import Calculator from '../Calculator/Calculator.jsx'
import { useNavigate } from 'react-router'

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='Home'>
      <h1> <span>INFONET</span> App Store</h1>
      <div className="allTags">
        <div className='calculatorTag' onClick={()=>navigate('/calculator')}> 
          <img src="/images/calculator.jpg" alt="img" /> 
          <span>Calculator</span>
        </div>
        <div className='toDoAppTag' onClick={()=>navigate('/todo_app')}>
          <img src="/images/todo_app.jpg" alt="img" />
          <span>ToDo App</span>
        </div>
        <div className='calendarTag' onClick={()=>navigate('/calendar')}>
          <img src="/images/calendar.avif" alt="img" />
          <span>Calendar</span>
        </div>
        <div className='TicTacToeTag' onClick={()=>navigate('/tictactoe')}>
          <img src="/images/tictactoe.png" alt="img" />
          <span>Tic Tac Toe Game</span>
        </div>
        <div className='weatherAppTag' onClick={()=>navigate('/weatherapp')} >
          <img src="/images/weather.png" alt="img" />
          <span>Weather App</span>
        </div>
      </div>
    </div>
  )
}

export default Home
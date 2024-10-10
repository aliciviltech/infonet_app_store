import React, { useEffect, useState } from 'react'
import './WeatherApp.css'

const WeatherApp = () => {
  const APIkey = '13c34acc87a5f0efc6e2bf5854ae8a71'
  const [cityName, setCityName] = useState('karachi');
  const [weatherData, setWeatherData] = useState('');
  const fetchDataF = async () => {
    if (cityName !== '') {
      try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}&units=metric`)
        if (!res.ok) {
          throw new Error(`City not found: ${res.status}`);
        }
        const data = await res.json();
        setWeatherData(data);
        console.log(data)
      }
      catch (e) {
        // setWeatherData('')
        alert(e)
      }
    } else {
      alert('enter valid city name')
    }
  }
  useEffect(()=>{
    fetchDataF();
  },[]);
  if(weatherData){
    return (
      <div className='WeatherApp'>
        <div className="weatherAppCard">
          <div className="input">
            <input type="text" value={cityName} 
              onChange={(e) => setCityName(e.target.value)} 
              onKeyDown={(e)=> {e.key==='Enter' && fetchDataF()}}
              />
            <button onClick={fetchDataF}><i className='fa-solid fa-search'></i></button>
          </div>
          <div className="resultContainer">
            <div className="locationTime">
              <h3>{weatherData.name} </h3>
              <h3>{new Date().toLocaleTimeString()} {new Date().toLocaleDateString()}</h3>
            </div>
            <div className="image">
              <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`} alt="" />
            </div>
            <div className="temperature">
              {weatherData.main.temp}<sup>o</sup>C
            </div>
          
            <div className="icon">
  
            </div>
          </div>
        </div>
      </div>
    )
  }
  
}

export default WeatherApp
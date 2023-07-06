import React, { useState } from 'react'
import axios from 'axios'
import './weather.css'
const Weather = () => {
const [weatherData, setWeatherData] = useState(null);
const [city, setCity] =  useState('');

const seeWeather = async () => {
try{
    const apiKey = '8e424da8ce62044e51fd423e567f4c88';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response =await axios.get(apiUrl);
    setWeatherData(response.data);
} catch (error) {
console.error(error);
}
};

const getWeatherIcon = (iconCode) => {
    const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
    return <img src={iconUrl} alt="Weather Icon" />;
  };



  return (
    <div className='container'>
<h1> Weather App</h1>
        <div className='search'>
        <input 
        type='text'
        placeholder='Search City'
        value={city}
        onChange={(e)=>setCity(e.target.value)}
        />
         <button onClick={seeWeather}>
            Search
         </button>
        </div>
         {weatherData && (
        <div className='weather-details'>
          <h2> {weatherData.name} </h2>
          <p className='temp'> {weatherData.main.temp}°C</p>
          <div className='icon'>
          {getWeatherIcon(weatherData.weather[0].icon)}
          </div>
          <p className='descript'> {weatherData.weather[0].description}</p>
        </div>
      )}
      <footer className='foot'>
        Made By Muhammad Ahmed Amin ❤️
      </footer>
    </div>
  )
}

export default Weather

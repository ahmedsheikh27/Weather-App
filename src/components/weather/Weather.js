import React, { useState } from 'react'
import axios from 'axios'

const Weather = () => {
const [weather, setWeather] = useState(null);
const [city, setCity] =  useState('');

const seeWeather = async () => {
try{
    const apiKey = '8e424da8ce62044e51fd423e567f4c88';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response =await axios.get(apiUrl);
    setWeather(response.data);
} catch (error) {
console.error(error);
}
};


  return (
    <div>
        <input 
        placeholder='Search City' />
      
    </div>
  )
}

export default Weather

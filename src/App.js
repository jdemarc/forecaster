import React, { useState } from 'react'
import './App.css'
import WeatherPanel from './components/WeatherPanel'
import Search from './components/Search'
import { fetchWeatherData } from './services/weather-api'

const App = () => {

  const [weather, setWeather] = useState({})
  const [city, setCity] = useState('');
  const [input, setInput] = useState(false)

  // Edge cases needed ?
  const handleCityChange = async () => {
    const weatherData = await fetchWeatherData(city);
    
    if (weatherData.cod === 200) {
      setWeather(weatherData);
      setInput(true);
    } else {
      setInput(false);
    }
  }

  const handleInput = (e) => {
    const city = e.target.value
    setCity(city);
  }

      return (
        <div className="App">
            <div className='weather-hdr-full'>
            <h2>Weather app</h2>
            <Search
              city={city}
              handleInput={handleInput}
              handleCityChange={handleCityChange}
            />
          </div>

          { input
            ? <WeatherPanel
                city={city}
                weather={weather}
              />
            : null
          }
        </div>
      );
}

export default App;

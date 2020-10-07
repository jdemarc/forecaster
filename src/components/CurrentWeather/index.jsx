import React from 'react'
import WeatherIcon from 'react-icons-weather'
import styles from './CurrentWeather.module.css'

function CurrentWeather(props) {
    const weather = props.weather

    return (
        <div className={styles.CurrentWeather}>
              <div className={styles['inner-weather']}>
                {Math.floor(weather.main.temp)} °F
              <WeatherIcon
                name='owm'
                iconId={weather.weather[0].id.toString()}
                style={{fontSize: 70, paddingLeft: 20}}
              />
            </div>
            
            <div className={styles['weather-card']}>
              <div>Feels like: {Math.floor(weather.main.feels_like)} °F</div>
              <div>Humidity: {weather.main.humidity}%</div>
              <div>{weather.weather[0].description}</div>
            </div>
        </div>
    )
}

export default CurrentWeather
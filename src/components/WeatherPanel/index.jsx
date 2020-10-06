import React from 'react'
import styles from './WeatherPanel.module.css'
import DayCard from '../DayCard'
import CurrentWeather from '../CurrentWeather'

function WeatherPanel(props) {
    const forecast = props.forecast
    const weather = props.weather

    return (
        <div className={styles.WeatherPanel}>
            <h2 className={styles['location-hdr']}>{weather.name}, {weather.sys.country}</h2>
                <CurrentWeather weather={weather}/>
            <div className={styles['day-ctr']}>
                {forecast.map((day) => (
                    <DayCard 
                    dayInfo={day}
                    key={day.dt}
                    />
                ))}
            </div>
        </div>
    )
}

export default WeatherPanel
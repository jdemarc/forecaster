import React from 'react'
import styles from './WeatherPanel.module.css'
import DayCard from '../DayCard'
function WeatherPanel(props) {
    console.log(props.weather)

    const weather = props.weather

    return (
        <div className={styles.WeatherPanel}>
            {weather.map((day) => (
                <DayCard 
                dayInfo={day}
                key={day.dt}
                />
              ))}
        </div>
    )
}

export default WeatherPanel
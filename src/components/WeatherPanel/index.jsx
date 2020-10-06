import React from 'react'
import styles from './WeatherPanel.module.css'
import DayCard from '../DayCard'

function WeatherPanel(props) {
    const weather = props.weather

    return (
        <div className={styles.WeatherPanel}>
            <h2 className={styles['location-hdr']}>Raleigh, NC</h2>

            <div className={styles['day-ctr']}>
                {weather.map((day) => (
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
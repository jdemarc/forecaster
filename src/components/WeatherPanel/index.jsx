import React from 'react'
import styles from './WeatherPanel.module.css'
import Day from '../Day'
function WeatherPanel(props) {
    return (
        <div className={styles.WeatherPanel}>

            <ul>
            {props.weather.map((day) => (
                <li key={day.dt}>
                    {day.dt}
                </li>
              ))}
            </ul>
            <Day />
            <Day />
            <Day />
            <Day />
            <Day />
        </div>
    )
}

export default WeatherPanel
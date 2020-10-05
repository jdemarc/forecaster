import React from 'react'
import styles from './WeatherPanel.module.css'
import Day from '../Day'
function WeatherPanel() {
    return (
        <div className={styles.WeatherPanel}>
            <Day />
            <Day />
            <Day />
            <Day />
            <Day />
        </div>
    )
}

export default WeatherPanel
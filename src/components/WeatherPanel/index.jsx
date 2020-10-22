import React from 'react'
import styles from './WeatherPanel.module.css'
import CurrentWeather from '../CurrentWeather'
import DetailCard from '../DetailCard'
import { parseDateTime } from '../../helpers/dt-format'

const WeatherPanel = ( {weather} ) => {

    const formattedWeekday = parseDateTime('weekday', weather.dt)
    const formattedDate = parseDateTime('datetime', weather.dt)

    return (
        <div className={styles.WeatherPanel}>
            <div className={styles['location-hdr']}>
              <div>
                {weather.name}, {weather.sys.country}
              </div>
              <div
                style={{fontSize: 16}}
              >
                {formattedWeekday}, {formattedDate}
              </div>
            </div>
            <CurrentWeather weather={weather}/>
            <DetailCard weather={weather}/>
        </div>
    )
}

export default WeatherPanel
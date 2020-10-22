import React from 'react'
import styles from './DetailCard.module.css'
import { parseDateTime } from '../../helpers/dt-format'

const DetailCard = ( {weather} ) => {
    const sunrise = parseDateTime('time', weather.sys.sunrise)
    const sunset = parseDateTime('time', weather.sys.sunset)

    return (
        <div className={styles.DetailCard}>
          <div>High: {Math.floor(weather.main.temp_max)} &deg;</div>
          <div>Low: {Math.floor(weather.main.temp_max)} &deg;</div>
          <div>Wind: {weather.wind.speed}mph</div>
          <div>Sunrise: {sunrise}</div>
          <div> Sunset: {sunset} </div>
        </div>
    )
}

export default DetailCard
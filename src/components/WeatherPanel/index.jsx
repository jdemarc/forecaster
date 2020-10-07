import React from 'react'
import styles from './WeatherPanel.module.css'
import CurrentWeather from '../CurrentWeather'
import DetailCard from '../DetailCard'

const moment = require('moment')

function WeatherPanel(props) {
    const weather = props.weather

    const newDate = new Date()
    const weekday = weather.dt * 1000
    newDate.setTime(weekday)

    const formattedWeekday = moment(newDate).format('dddd')
    const formattedDate = moment(newDate).format('MMMM Do YYYY, h:mm a')
    return (
        <div className={styles.WeatherPanel}>
            <div className={styles['location-hdr']}>
              <div>
                {weather.name}, {weather.sys.country}
              </div>
              <div
                style={{fontSize: 20}}
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
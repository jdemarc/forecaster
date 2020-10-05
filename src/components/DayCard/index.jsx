import React from 'react'
import 'weather-icons/css/weather-icons.css';
import styles from './DayCard.module.css'
const moment = require('moment')

function DayCard(props) {
    console.log(props)
    const dayInfo = props.dayInfo
    const imgURL = `wi wi-owm-day-${dayInfo.weather[0].id}`
    console.log(dayInfo.weather[0].id)
    console.log(imgURL)

    const newDate = new Date()
    const weekday = dayInfo.dt * 1000
    newDate.setTime(weekday)

    return (
        <div className={styles.DayCard}>
            <h4>{moment(newDate).format('dddd')}</h4>
            <p>{moment(newDate).format('MMMM Do YYYY, h:mm a')}</p>
            <i class={imgURL}></i>
            <p>{dayInfo.weather[0].description}</p>
            <p>{Math.floor(dayInfo.main.temp)}</p>
        </div>
    )
}

export default DayCard
import React from 'react'
import styles from './DayCard.module.css'
import WeatherIcon from 'react-icons-weather';

const moment = require('moment')

function DayCard(props) {
    console.log(props)
    const dayInfo = props.dayInfo

    const newDate = new Date()
    const weekday = dayInfo.dt * 1000
    newDate.setTime(weekday)

    return (
        <div className={styles.DayCard}>
            <h4>{moment(newDate).format('dddd')}</h4>
            <p>{moment(newDate).format('MMMM Do YYYY, h:mm a')}</p>
            <WeatherIcon
                name='owm'
                iconId={dayInfo.weather[0].id}
                style={{fontSize: 50}}
            />
            <p style={{fontSize: 30}} 
            >{Math.floor(dayInfo.main.temp)} °F</p>
            <p>{dayInfo.weather[0].description}</p>
        </div>
    )
}

export default DayCard
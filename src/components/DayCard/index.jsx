import React from 'react'
const moment = require('moment')

function DayCard(props) {
    console.log(props)

    const newDate = new Date();
    const weekday = props.dayInfo.dt * 1000
    newDate.setTime(weekday)

    return (
        <div>{moment(newDate).format('dddd')}</div>
    )
}

export default DayCard
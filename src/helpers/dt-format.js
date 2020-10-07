const moment = require('moment')

export function parseDateTime(type, date) {
    const newDate = new Date()
    const day = date * 1000
    newDate.setTime(day)

    if (type === 'weekday') {
        return moment(newDate).format('dddd')
    } else if (type === 'datetime') {
        return moment(newDate).format('MMMM Do YYYY, h:mm a')
    } else if (type === 'time') {
        return moment(newDate).format('h:mm a')
    }
}
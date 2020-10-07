import React from 'react'
import { parseDateTime } from '../../helpers/dt-format'

function DetailCard(props) {
    const weather = props.weather
    const sunrise = parseDateTime('time', weather.sys.sunrise)
    const sunset = parseDateTime('time', weather.sys.sunset)
    
    return (
        <div>
          High: {Math.floor(weather.main.temp_max)} &deg;
          Low: {Math.floor(weather.main.temp_max)} &deg;
          Wind: {weather.wind.speed}mph
          Sunrise: {sunrise}
          Sunset: {sunset}
        </div>
    )
}

export default DetailCard
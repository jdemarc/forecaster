import React from 'react'

function DetailCard(props) {
    const weather = props.weather

    return (
        <div>
          High: {Math.floor(weather.main.temp_max)} &deg;
          Low: {Math.floor(weather.main.temp_max)} &deg;
          Wind: {weather.wind.speed}mph
          Sunrise:
          Sunset: 
        </div>
    )
}

export default DetailCard
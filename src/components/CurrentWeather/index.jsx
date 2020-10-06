import React from 'react'

function CurrentWeather(props) {
    console.log(props)
    const weather = props.weather

    return (
        <div>
            <p>Feels like: {Math.floor(weather.main.feels_like)} °F</p>
            <p>Humidity: {weather.main.humidity}</p>
            <p>{weather.weather[0].description}</p>

        </div>
    )
}

export default CurrentWeather
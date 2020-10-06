// API calls.

export function fetchWeatherData(city) {
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY
    const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city},us&units=imperial&appid=${API_KEY}`
    return fetch(URL)
        .then(res => res.json())
        .catch((error) => {
            console.log('Error fetching:', error)
        })
}

export function fetchForecast(city) {
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY
    const URL = `http://api.openweathermap.org/data/2.5/forecast?q=${city},us&units=imperial&appid=${API_KEY}`
    return fetch(URL)
        .then(res => res.json())
        .catch((error) => {
            console.log('Error fetching:', error)
        })
}
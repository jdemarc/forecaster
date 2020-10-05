import React, { Component } from 'react';
import './App.css';
import Day from './components/Day';
import WeatherPanel from './components/WeatherPanel';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      error: null,
      isLoaded: false,
      weather: []
    }
  }

  componentDidMount() {
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY
    const URL = `http://api.openweathermap.org/data/2.5/forecast?id=4487042&cnt=5&appid=${API_KEY}`
    fetch(URL)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            weather: result.list
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

    render() {
      const { error, isLoaded, weather } = this.state
      if (error) {
        return <div>Error: {error.message}</div>
      } else if (!isLoaded) {
        return <div>Loading...</div>
      } else {
      return (
        <div className="App">
          <header className="Weather-hdr">
            5-Day Forecast
          </header>
    
          <div>
            <ul>
              {weather.map((day) => (
                <li key={day.dt}> {day.dt} </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }
  }
}

export default App;

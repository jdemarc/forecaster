import React, { Component } from 'react';
import './App.css';
import WeatherPanel from './components/WeatherPanel';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      error: null,
      isLoaded: true,
      weather: [],
      city: ''
    }
  }

  fetchForecast = (city) => {
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY
    const URL = `http://api.openweathermap.org/data/2.5/forecast?q=${city},us&units=imperial&appid=${API_KEY}`
    fetch(URL)
    .then(res => res.json())
    .then(
      (result) => {
        const dailyForecast = result.list.filter(day => (day.dt_txt.includes('18:00:00')))
          this.setState({
            isLoaded: true,
            forecast: dailyForecast,
            city
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

  fetchWeather = (city) => {
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY
    const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city},us&units=imperial&appid=${API_KEY}`
    fetch(URL)
    .then(res => res.json())
    .then(
      (result) => {
          this.setState({
            isLoaded: true,
            weather: result,
            city
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

  // Edge cases needed.
  handleSubmitClick = () => {
    if (this.state.city) {
      this.fetchForecast(this.state.city)
      console.log('fetching')
    }
  }

  handleInput = (e) => {
    const city = e.target.value

    this.setState({
      city
    })
  }


  render() {
    if (this.state.error) {
        return <div>Error: {this.state.error.message}</div>
      } else if (!this.state.isLoaded) {
        return <div>Loading...</div>
      } else {

      return (
        <div className="App">
          <header className="Weather-hdr">
            <h2>Weather app</h2>

            <div className="search">
              <input 
                type='text'
                placeholder='Raleigh'
                maxLength='50'
                value={this.state.city}
                onChange={this.handleInput}
              />

              <button onClick={this.handleSubmitClick}>
                Search
              </button>
            </div>
          </header>
    
          { this.state.forecast
          ?  <WeatherPanel
              city={this.state.city}
              forecast={this.state.forecast}
              weather={this.state.weather}
            />
          : <div></div>
          }
          <div>
          </div>
        </div>
      );
    }
  }
}

export default App;

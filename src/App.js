import React, { Component } from 'react'
import './App.css'
import WeatherPanel from './components/WeatherPanel'
import { fetchWeatherData } from './services/weather-api'

class App extends Component {

  //Implicit constructor call
  state = {
    weather: [],
    city: '',
    error: null
  }

  // Edge cases needed.
  handleCityChange = async () => {
    // console.log(city)
    const weatherData = await fetchWeatherData(this.state.city);
    
    if (weatherData) {
      this.setState({
        weather: weatherData
      })
    } else {
      // this.setState({
        //error
      // })
    }
  }

  handleInput = (e) => {
    const city = e.target.value

    this.setState({
      city
    })
  }


  render() {
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

              <button onClick={this.handleCityChange}>
                Search
              </button>
            </div>
          </header>
    
          {/* { this.state.forecast
          ?  <WeatherPanel
              city={this.state.city}
              forecast={this.state.forecast}
              weather={this.state.weather}
            />
          : <div></div>
          } */}
          <div>
          </div>
        </div>
      );
  }
}

export default App;

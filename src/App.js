import React, { Component } from 'react'
import './App.css'
import WeatherPanel from './components/WeatherPanel'
import Search from './components/Search'
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
          <div className="Weather-hdr">
            <h2>Weather app</h2>
            <Search
              city={this.state.city}
              handleInput={this.handleInput}
              handleCityChange={this.handleCityChange}
            />
          </div>
          
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

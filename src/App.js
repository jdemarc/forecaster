import React, { Component } from 'react'
import './App.css'
import WeatherPanel from './components/WeatherPanel'
import Search from './components/Search'
import { fetchWeatherData } from './services/weather-api'

class App extends Component {
  //Implicit constructor call
  state = {
    weather: {},
    city: '',
    // Initialized to true so the Weather component is not rendered automatically.
    input: false
  }

  // Edge cases needed.
  handleCityChange = async () => {
    const weatherData = await fetchWeatherData(this.state.city);
    
    if (weatherData.cod === 200) {
      this.setState({
        weather: weatherData,
        input: true
      })
    } else {
      this.setState({
        input: false
      })
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
            <div className='weather-hdr-full'>
            <h2>Weather app</h2>
            <Search
              city={this.state.city}
              handleInput={this.handleInput}
              handleCityChange={this.handleCityChange}
            />
          </div>

          { this.state.input
            ? <WeatherPanel
                city={this.state.city}
                weather={this.state.weather}
              />
            : <div 
                style={{margin: 20}}
              >
                We require additional pylons. <br />
                Ahem.. enter a city.
              </div>
          }
        </div>
      );
  }
}

export default App;

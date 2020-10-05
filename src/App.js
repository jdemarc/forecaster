import React, { Component } from 'react';
import './App.css';
import WeatherPanel from './components/WeatherPanel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="Weather-hdr">
          5-Day Forecast
        </header>
  
        <div>
          <WeatherPanel />
        </div>
      </div>
    );
  }
}

export default App;

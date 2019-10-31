import React from 'react';
import './App.css';
import WeatherCard from './components/WeatherCard';

class App extends React.Component {
  state={
    days: {
      Mon: {weather: [78, 67], forecast: "Sunny"},
      Tue: {weather: [74, 65], forecast: "Partly Cloudy"},
      Wed: {weather: [74, 65], forecast: "Sunny"},
      Thu: {weather: [74, 65], forecast: "Rain"},
      Fri: {weather: [80,70], forecast: "Sunny"}
    }
  }

  render () {
    const daysArray = [];
    const weatherArray = []
    for (let day in this.state.days) {
      daysArray.push(day);
    }

    // find better storage method for weather.
    return (
      <div className="App">
        <h1>Weather Zone</h1>
        {daysArray.map(day => {
          return <WeatherCard
            key={day}
            name={day}
          />
        })}
      </div>
    );
  }
}

export default App;

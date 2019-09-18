import React from 'react';
import './App.css';
import WeatherCard from './components/WeatherCard';

class App extends React.Component {
  state={
    days: {
      Mon: [78, 67],
      Tue: [73, 69],
      Wed: [79, 70],
      Thu: [76, 67],
      Fri: [80, 70]
    },
    forecast: {
      Mon: "Sunny",
      Tue: "Partly Cloudy",
      Wed: "Sunny",
      Thu: "Rain",
      Fri: "Sunny"
    }
  }

  render () {
    const weatherArray = [];
    for (let weather in this.state.days) {
      weatherArray.push(this.state.days[weather]);
    }
    // console.log(weatherArray)

    const daysArray = [];
    for (let day in this.state.days) {
      daysArray.push(day);
    }
    // console.log(daysArray)
    return (
      <div className="App">
        {daysArray.map(day => {
          return <WeatherCard />
        })}
      </div>
    );
  }
}

export default App;

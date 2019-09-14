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
    return (
      <div className="App">
        <WeatherCard />
      </div>
    );
  }
}

export default App;

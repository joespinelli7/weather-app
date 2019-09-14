import React from 'react';
import './App.css';
import WeatherCard from './components/WeatherCard';

class App extends React.Component {
  state={
    days: {
      Mon: [78, 67],
      Tue: [76, 69],
      Wed: [79, 70],
      Thu: [78, 68],
      Fri: [80, 70]
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

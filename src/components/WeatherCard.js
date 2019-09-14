import React from 'react';
import './WeatherCard.css';

class WeatherCard extends React.Component {
  render() {
    return (
      <div className={"WeatherCard"}>
        <h2><b>Day of week</b></h2>
        <p>image of forecast here</p>
        <div class="container">
          <p>forecast and degrees</p>
        </div>
      </div>
    );
  }
}

export default WeatherCard;

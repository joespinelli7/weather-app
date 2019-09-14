import React from 'react';
import classes from './WeatherCard.css';

class WeatherCard extends React.Component {
  render() {
    return (
      <div className={classes.WeatherCard}>
        <h1>Day of Week</h1>
        <p>image here</p>
        <p>Degrees(low and high)</p>
      </div>
    )
  }
}

export default WeatherCard;

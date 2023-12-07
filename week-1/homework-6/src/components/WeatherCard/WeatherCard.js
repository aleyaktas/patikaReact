import React from "react";
import styles from "./styles.module.css";

// WeatherCard component for displaying weather information for a specific day.
const WeatherCard = ({ day }) => {
  return (
    <div key={day.date} className={styles.weather}>
      {/* Displaying the date of the weather data. */}
      <span> {day.date} </span>
      <img src={day.day.condition.icon} alt={day.day.condition.text} />
      <strong> {day.day.avgtemp_c} C</strong>
      <span className={styles.span}> {day.day.condition.text}</span>
    </div>
  );
};

export default WeatherCard;

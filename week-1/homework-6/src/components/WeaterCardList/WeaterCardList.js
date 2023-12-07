import React from "react";
import styles from "./styles.module.css";
import WeaterCard from "../WeaterCard/WeaterCard";

// WeatherCardList component for displaying a list of weather cards.
const WeaterCardList = ({ weather }) => {
  return (
    <div className={styles.weatherContainer}>
      {/* Mapping through each day in the forecast and rendering a WeatherCard for each. */}
      {weather?.forecast?.forecastday?.map((day) => (
        <WeaterCard day={day} />
      ))}
    </div>
  );
};

export default WeaterCardList;

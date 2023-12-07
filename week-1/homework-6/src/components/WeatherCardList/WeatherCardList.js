import React from "react";
import styles from "./styles.module.css";
import { useWeather } from "../../context/Weather";
import WeatherCard from "../WeatherCard/WeatherCard";

// WeatherCardList component for displaying a list of weather cards.
const WeatherCardList = () => {
  const { weather } = useWeather();
  return (
    <div className={styles.weatherContainer}>
      {/* Mapping through each day in the forecast and rendering a WeatherCard for each. */}
      {weather?.forecast?.forecastday?.map((day) => (
        <WeatherCard day={day} />
      ))}
    </div>
  );
};

export default WeatherCardList;

import React, { useEffect } from "react";
import { getWeatherData } from "./action";
import CitiesSelectBox from "../CitiesSelectBox/CitiesSelectBox";
import DaysSelectBox from "../DaysSelectBox/DaysSelectBox";
import styles from "./styles.module.css";
import WeatherCardList from "../WeatherCardList/WeatherCardList";
import { useWeather } from "../../context/Weather";

const Home = () => {
  const { selectedCity, setWeather, day } = useWeather();

  //Get data from api
  useEffect(() => {
    getWeatherData(selectedCity, day).then((res) => setWeather(res));
  }, [selectedCity, day]);

  return (
    <div className="App">
      <h1>Turkey Weather</h1>
      <div className={styles.selectboxContainer}>
        {/* Show select box and handle changing */}
        <CitiesSelectBox />
        <DaysSelectBox />
      </div>
      <WeatherCardList />
    </div>
  );
};

export default Home;

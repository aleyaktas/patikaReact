import React, { useEffect, useState } from "react";
import { getWeatherData } from "./action";
import CitiesSelectBox from "../CitiesSelectBox/CitiesSelectBox";
import DaysSelectBox from "../DaysSelectBox/DaysSelectBox";
import styles from "./styles.module.css";
import WeaterCardList from "../WeaterCardList/WeaterCardList";

const Home = () => {
  const [selectedCity, setSelectedCity] = useState("Adana");
  const [weather, setWeather] = useState([]);
  const [day, setDay] = useState([0]);

  //Get data from api
  useEffect(() => {
    getWeatherData(selectedCity, day).then((res) => setWeather(res));
  }, [selectedCity, day]);

  //Handle the change of city and day
  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleDaysChange = (event) => {
    setDay(event.target.value);
  };

  return (
    <div className="App">
      <h1>Turkey Weather</h1>
      <div className={styles.selectboxContainer}>
        {/* Show select box and handle changing */}
        <CitiesSelectBox onChange={handleCityChange} />
        <DaysSelectBox onChange={handleDaysChange} />
      </div>
      <WeaterCardList weather={weather} />
    </div>
  );
};

export default Home;

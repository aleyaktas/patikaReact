import { createContext, useContext, useState } from "react";

//Create context for weather
const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  //Create the needed states
  const [selectedCity, setSelectedCity] = useState("Adana");
  const [weather, setWeather] = useState([]);
  const [day, setDay] = useState([0]);

  //Handle the change of city
  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  //Handle the change of day
  const handleDaysChange = (event) => {
    setDay(event.target.value);
  };

  return (
    <WeatherContext.Provider
      value={{
        day,
        setDay,
        weather,
        setWeather,
        selectedCity,
        setSelectedCity,
        handleCityChange,
        handleDaysChange,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);

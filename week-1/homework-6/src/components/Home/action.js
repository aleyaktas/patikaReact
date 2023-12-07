import axios from "axios";

// API request - get weather data according to city and day
export const getWeatherData = async (city, day) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const res = await axios.get(
    `http://api.weatherapi.com/v1/forecast.json?q=${city}&key=${apiKey}&days=${day}`
  );

  return res.data;
};

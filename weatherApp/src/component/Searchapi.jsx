import React, { useState } from "react";
import "./Searchapi.css";
import axios from "axios";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Forceast from "./Forceast";

const Searchapi = ({ getSerachInfo, Info }) => {
  const [city, setCity] = useState("");
  let [error, setError] = useState(false);
  const [forecastData, setForecastData] = useState([]);

  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const forecastURL = "https://api.openweathermap.org/data/2.5/forecast";
  const API_Key = "f889da55794f19f359935c03f9154a2d";

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const weatherData = await getWeatherData();
      const forecastData = await getForecastData();
      getSerachInfo(weatherData);
      setForecastData(forecastData);

      setError(false);
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  const getWeatherData = async () => {
    try {
      const response = await fetch(
        `${URL}?q=${city}&appid=${API_Key}&units=metric`
      );
      const jsonResponse = await response.json();
      return {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
        icon: jsonResponse.weather[0].icon,
        wind: jsonResponse.wind.speed,
      };
    } catch (err) {
      throw err;
    }
  };

  const getForecastData = async () => {
    const response = await axios.get(
      `${forecastURL}?q=${city}&appid=${API_Key}&units=metric`
    );
    const data = response.data.list;
    let prevDayOfWeek = null;
    const mappedData = data.map((item) => {
      const { dt_txt, main, weather } = item;
      const date = new Date(dt_txt);
      const dayOfWeek = date.getDay();
      const tempData = {
        tempMin: main.temp_min,
        tempMax: main.temp_max,
        humidity: main.humidity,
        icon: weather[0].icon,
        dt_txt,
        dayOfWeek: null,
      };
      console.log(tempData.icon);
      if (dayOfWeek !== prevDayOfWeek) {
        tempData.dayOfWeek = time(dt_txt);
        prevDayOfWeek = dayOfWeek;
      }
      return tempData;
    });
    return mappedData;
  };

  const time = (dt_txt) => {
    const dateString = dt_txt;
    const date = new Date(dateString);
    const newdayOfWeek = date.getDay();
    let dayOfWeek = new Date().getDay();
    if (newdayOfWeek !== dayOfWeek) {
      dayOfWeek = newdayOfWeek;
    }
    console.log(dayOfWeek);
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[dayOfWeek];
    // return dayOfWeek;
  };

  return (
    <div className="search flex flex-col justify-between  w-[50vw] h-[60vh]">
      <div className=" flex align-middle flex-col gap-10 text">
        <h1 className="text-3xl font-bold">Weather App</h1>
        <form onSubmit={handleSubmit}>
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            size="small"
            value={city}
            onChange={handleInputChange}
          />
          <Button className="button" variant="contained" type="submit">
            Search
          </Button>
        </form>
        {error && (
          <p className="text-red-900 font-bold">no such place in here</p>
        )}
        <h1 className="text-2xl font-bold">{Info.city}</h1>
        <Forceast forecastData={forecastData} />
      </div>
    </div>
  );
};

export default Searchapi;

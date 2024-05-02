import React, { useState } from "react";
import Inbox from "./Inbox";
import Searchapi from "./Searchapi";

import "./Weather.css";

const Weather = () => {
  const [weather, setWeather] = useState({
    city: "",
    temp: "26.9",
    tempMin: "26.9",
    tempMax: "26.9",
    humidity: "74",
    feelslike: "29.01",
    weather: "scattered clouds",
  });
  let getSerachInfo = (newInfo) => {
    setWeather(newInfo);
  };
  return (
    <div className="weather flex align-center justify-center gap-11 p-11 ">
      <Inbox Info={weather} />
      <Searchapi getSerachInfo={getSerachInfo} Info={weather} />
    </div>
  );
};

export default Weather;

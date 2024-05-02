import React from "react";
import "./Forceast.css";

const Forceast = ({ forecastData }) => {
  return (
    <div className=" auto flex   justify-center gap-10">
      {forecastData.map(
        (forecast, index) =>
          (forecast.dayOfWeek === "Sunday" ||
            forecast.dayOfWeek === "Monday" ||
            forecast.dayOfWeek === "Tuesday" ||
            forecast.dayOfWeek === "Wednesday" ||
            forecast.dayOfWeek === "Thursday" ||
            forecast.dayOfWeek === "Friday" ||
            forecast.dayOfWeek === "Saturday") && (
            <div
              className="card flex  bg-[#e0aaff] text-white shadow--900 shadow-md rounded-md  flex-col text-center"
              key={index}
            >
              <p> {forecast.dayOfWeek}</p>
              <span className="icon ">
                <img
                  src={`https://openweathermap.org/img/wn/${forecast.icon}@2x.png`}
                  alt=""
                />
              </span>

              <span className="para flex justify-center  gap-3">
                <p> {Math.floor(forecast.tempMin)}&deg;</p>
                <p> {Math.floor(forecast.tempMax)}&deg;</p>
              </span>
            </div>
          )
      )}
    </div>
  );
};

export default Forceast;

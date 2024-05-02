import React from "react";
import moment from "moment";
import "./Inbox.css";

const Inbox = ({ Info }) => {
  let URL =
    "https://images.unsplash.com/photo-1457269449834-928af64c684d?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let sunURL =
    "https://media.istockphoto.com/id/1471184975/photo/sydney-sunrise.webp?b=1&s=170667a&w=0&k=20&c=ZaRK9zmAAs8u60FQhdKRo3dGkNfZXKeg6JyMFmMauYs=";
  let rainURL =
    "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  let nightURl =
    "https://images.unsplash.com/photo-1488866022504-f2584929ca5f?q=80&w=1724&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div
      className={`Inbox w-[20vw] h-[60vh] rounded-xl flex flex-col justify-between items-center`}
    >
      <div className="text-2xl text-bold  p-5 text-center font-bold">
        <h1>{moment().format("dddd")}</h1>
        <p>{moment().format("LT")}</p>
      </div>

      <div className="icon bg-[#9a031e] rounded-full w-[10vw] h-[10vw] overflow-hidden">
        <img
          className="object-cover  w-[100%] h-[100%]"
          src={Info.humidity > 80 ? rainURL : Info.temp > 15 ? sunURL : URL}
          alt=""
        />
      </div>
      <div className="flex items-center justify-between  w-[100%] p-5 text-lg font-bold">
        <span>Humidity:&nbsp;&nbsp;{Info.humidity}%</span>
        <span>wind:&nbsp;&nbsp;{Info.wind ? Info.wind : 72}Km/hr</span>
      </div>
    </div>
  );
};

export default Inbox;

"use client";

import React, { useState } from "react";
import Input from "./components/Input";
import Current from "./components/Current";
import WeekForecast from "./components/WeekForecast";
import WeatherDetails from "./components/WeatherDetails";



const Home = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const url = `http://api.weatherapi.com/v1/forecast.json?key=8e220c5263324cd28d1202332233107&q=${location}&days=7&aqi=yes&alerts=yes`;

  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("");
        }

        const data = await response.json();
        setData(data);
        setLocation("");
        setError("");
      } catch (error) {
        setError("city not found");
        setData({});
      }
    }
  };

  let content;
  if (Object.keys(data).length === 0 && error === "") {
    content = (
      <div className="text-white text-center h-screen mt-[5rem]">
        <h2 className="text-3xl font-bold mb-4">Welcome to the Weather App</h2>
        <p className="text-xl ">Built by K S Sai Teja</p>
      </div>
    );
  } else if (error !== "") {
    content = (
      <div className="text-white text-center h-screen mt-[5rem]">
        <p className="text-3xl font-bold mb-4">City not found</p>
        <p className="text-xl">Enter a valid city</p>
      </div>
    );
  } else {
    content = (
      <>
        <div className="flex md:flex-row flex-col p-12 items-center justify-between">
          <Current data={data} />
          <WeekForecast data={data} />
        </div>
        <div>
          <WeatherDetails data={data} />
        </div>
      </>
    );
  }
  return (
    <div className="h-fit bg-cover bg-gradient-to-r from-blue-500 to-blue-300">
      <div className="flex flex-col w-full h-fit lg:h-screen  md:h-screen bg-white/25">
        {/* Input and logo */}
        <div className="flex flex-col items-center justify-between p-12 md:flex-row">
          <Input handleSearch={handleSearch} setLocation={setLocation} />
          <h1 className="mb-8 md:mb-0 order-1 text-white py-2 px-4 rounded-xl italic font-bold">
            Weather App.
          </h1>
        </div>
        {content}
      </div>
    </div>
  );
};

export default Home;
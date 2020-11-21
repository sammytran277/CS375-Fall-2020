import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import WeatherJumbotron from "./WeatherJumbotron/WeatherJumbotron";

const axios = require("axios");

const App = () => {
  const [zipCode, setZipCode] = useState("19104");
  const [currentWeatherData, setCurrentWeatherData] = useState({});
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/current?zip=${zipCode}`)
      .then((response) => {
        setCurrentWeatherData(response.data);
      });
  }, [zipCode]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/splash?query=${currentWeatherData.desc}`)
      .then((response) => {
        setImageUrl(response.data.url);
      });
  }, [currentWeatherData]);

  return (
    <>
      <Header submit={(zipCode) => setZipCode(zipCode)} />
      <WeatherJumbotron url={imageUrl} data={currentWeatherData} />
    </>
  );
};

export default App;

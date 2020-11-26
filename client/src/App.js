import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import WeatherJumbotron from "./WeatherJumbotron/WeatherJumbotron";

const axios = require("axios");

const App = () => {
  const [zipCode, setZipCode] = useState("19104");
  const [currentWeatherData, setCurrentWeatherData] = useState({});
    const [currentForecastData, setCurrentForecastData] = useState({});
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
    
    useEffect(() => {
    axios.get(`http://localhost:5000/forecast?zip=${zipCode}`).then((response) => {
      setCurrentForecastData(response.data);
      //console.log(response.data);
    });
  }, [zipCode]);

  return (
    <>
      <Header submit={(zipCode) => setZipCode(zipCode)} />
      <WeatherJumbotron url={imageUrl} data={currentWeatherData} />
        <Forecast value={currentForecastData} />
    </>
  );
};

export default App;

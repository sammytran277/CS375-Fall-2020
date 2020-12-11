import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import WeatherJumbotron from "./WeatherJumbotron/WeatherJumbotron";
import Forecast from "./Forecast/Forecast";
import Comments from "./Comments/Comments";
import Footer from "./Footer/Footer";

const axios = require("axios");

const App = () => {
  const [zipCode, setZipCode] = useState("19104");
  const [currentWeatherData, setCurrentWeatherData] = useState({});
  const [currentForecastData, setCurrentForecastData] = useState({});
  const [imageUrl, setImageUrl] = useState("");
  const [currentComments, setCurrentComments] = useState([]);

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
    axios
      .get(`http://localhost:5000/forecast?zip=${zipCode}`)
      .then((response) => {
        setCurrentForecastData(response.data);
        //console.log(response.data);
      });
  }, [zipCode]);

  useEffect(() => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    const date = `${mm}/${dd}/${yyyy}`;
    axios
      .get(`http://localhost:5000/comments?zip=${zipCode}&date=${date}`)
      .then((response) => {
        // console.log(response.data);
        setCurrentComments(response.data);
      });
  }, [zipCode]);

  return (
    <>
      <Header submit={(zipCode) => setZipCode(zipCode)} />
      <WeatherJumbotron url={imageUrl} data={currentWeatherData} />
      <Forecast value={currentForecastData} />
      <Comments zipCode={zipCode} comments={currentComments} />
      <Footer />
    </>
  );
};

export default App;

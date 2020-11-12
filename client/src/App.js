import React, { useState } from "react";
import Header from "./Header/Header";
import WeatherJumbotron from "./WeatherJumbotron/WeatherJumbotron";

const App = () => {
  const [zipCode, setZipCode] = useState("19104");

  return (
    <>
      <Header submit={(zipCode) => setZipCode(zipCode)} />
      <WeatherJumbotron zipCode={zipCode} />
    </>
  );
};

export default App;

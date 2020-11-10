import React, { useState } from "react";
import Header from "./Header/Header";
import WeatherJumbotron from "./WeatherJumbotron/WeatherJumbotron";

const App = () => {
  const [zipCode, setZipCode] = useState("19104");
  // TODO: Pass onClick handler to Header as a prop
  // TODO: Pass zipCode to WeatherJumbotron

  return (
    <>
      <Header />
      <WeatherJumbotron />
    </>
  );
};

export default App;

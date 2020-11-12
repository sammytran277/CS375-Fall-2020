import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

const WeatherJumbotron = ({ data }) => {
  return (
    <Jumbotron>
      <div>{(data.current) ? data.current + "\u00B0F" : null}</div>
      <div>{(data.desc) ? data.desc : null}</div>
      <div>{(data.city) ? data.city + " weather" : null}</div>
    </Jumbotron>
  );
};

export default WeatherJumbotron;

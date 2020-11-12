import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

const WeatherJumbotron = (props) => {
  return (
    <Jumbotron>
      <h1>{props.zipCode}</h1>
    </Jumbotron>
  );
};

export default WeatherJumbotron;

import React from "react";
import { Jumbotron } from "react-bootstrap";

import "./WeatherJumbotron.css";

const WeatherJumbotron = ({ data, url }) => {
  const styleObj = {
    display: "flex",
    alignItems: "flex-end",
    backgroundImage: `url(${url})`,
    height: "65vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <Jumbotron style={styleObj}>
      <div>
        <h1 className="jumbotron-text">
          {data.current ? data.current + "\u00B0F" : null}
        </h1>
        <h5 className="jumbotron-text">{data.desc ? data.desc : null}</h5>
        <h5 className="jumbotron-text">
          {data.city ? data.city + " weather" : null}
        </h5>
      </div>
    </Jumbotron>
  );
};

export default WeatherJumbotron;

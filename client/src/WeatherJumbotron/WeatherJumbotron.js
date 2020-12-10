import React from "react";

import "./WeatherJumbotron.css";

const WeatherJumbotron = ({ data, url }) => {
  const styleObj = {
    padding: "25px",
    display: "flex",
    alignItems: "flex-end",
    backgroundImage: `url(${url})`,
    height: "35vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div style={styleObj}>
      <div>
        <h1 className="jumbotron-text">
          {data.current ? data.current + "\u00B0F" : null}
        </h1>
        <h5 className="jumbotron-text">{data.desc ? data.desc : null}</h5>
        <h5 className="jumbotron-text">
          {data.city ? data.city + " weather" : null}
        </h5>
      </div>
    </div>
  );
};

export default WeatherJumbotron;

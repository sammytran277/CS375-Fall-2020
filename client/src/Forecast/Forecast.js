import React from "react";
import "./Forecast.css";
// import cloud from "./cloud.png";
import overcast from "./overcast.png";
import sunny from "./sunny.png";
import rain from "./rain.jpg";
import broken_clouds from "./broken_clouds.png";
// import light_rain from "./light_rain.png";
import Tile from "./Tile.js";

// const axios = require("axios");

const Forecast = ({ value }) => {

    const bigItems = [];
    var subItems = [];
    if (!value.data) {
      return (<div></div>);
    }

    for (var i = 0; i < value.data.length; i++) {
      if(i < value.data.length - 1) {
        if (
          value.data[i]["date"].split(",")[0] !== value.data[i + 1]["date"].split(",")[0]
        ) {
          bigItems.push(subItems);
          subItems = []
        }
        else{
          subItems.push(value.data[i])
        }
      }
    }

    bigItems.push(subItems);

    const cell = [];
    var temp = []
    const head = []
    for (i = 0; i < bigItems.length - 1; i++){
      temp = []
      for (var j = 0; j < bigItems[i].length - 1; j++){
        temp.push(Math.floor(bigItems[i][j]["temp"]))
      }

      head.push(
        <>
          <td class='blank'> &nbsp; </td>
          <th>{bigItems ? bigItems[i][0]["date"].split(",")[0] : null}</th>
        </>
      )

      if (bigItems[i][0]["forecast"][0] === "broken clouds" || bigItems[i][0]["forecast"][0] === "scattered clouds" || bigItems[i][0]["forecast"][0] === "few clouds"){
        cell.push(
          <>
            <td class='blank'> &nbsp; </td>
            <td>
              <Tile count={ i } data={ value.data } image={ broken_clouds } temp={ temp } bigItems={ bigItems } i={ i }></Tile>
            </td>
          </>
        );
      }
      else if (bigItems[i][0]["forecast"][0] === "clear sky"){
        cell.push(
          <>
            <td class='blank'> &nbsp; </td>
            <td>
              <Tile count={ i } data={ value.data } image={ sunny } temp={ temp } bigItems={ bigItems } i={ i }></Tile>
            </td>
          </>
        );
      }

      else if (bigItems[i][0]["forecast"][0] === "light rain"){
        cell.push(
          <>
            <td class='blank'> &nbsp; </td>
            <td>
              <Tile count={ i } data={ value.data } image={ rain } temp={ temp } bigItems={ bigItems } i={ i }></Tile>
            </td>
          </>
        );
      }

      else if (bigItems[i][0]["forecast"][0] === "overcast clouds"){
        cell.push(
          <>
            <td class='blank'> &nbsp; </td>
            <td>
              <Tile count={ i } data={ value.data } image={ overcast } temp={ temp } bigItems={ bigItems } i={ i }></Tile>
            </td>
          </>
        );
      }
    }
    cell.push(
      <td class='blank'> &nbsp; </td>
    );
    
    return (
      <div>
        <table>
        {head} 
          <tr>{cell}</tr>
          <tr></tr>
        </table>
      </div>
    );
  };

export default Forecast;

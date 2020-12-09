import React from "react";
import "./Forecast.css";

const axios = require("axios");



const Forecast = ({ value }) => {
  
  const bigItems = [];
  var subItems = [];
  if (!value.data) {
    return (<div></div>);
  }
  for (var i = 1; i < value.data.length; i++) {
    if (
      value.data[i]["date"].split(",")[0] !==
      value.data[i - 1]["date"].split(",")[0]
    ) {
      bigItems.push(subItems);
      subItems = []
    }
    else{
      subItems.push(value.data[i - 1])
    }
  }
  const cell = [];
  var temp = []
  const head = []
  for (i = 0; i < bigItems.length; i++){
    temp = []
    for (var j = 0; j < bigItems[i].length; j++){
      temp.push(Math.floor(bigItems[i][j]["temp"]))
    }
    console.log(Math.min(...temp));
    head.push(
      <th>{bigItems ? bigItems[i][0]["date"].split(",")[0] : null}</th>
    )

    /*if (bigItems[i][0]["forecast"][0] == "few clouds"){
      cell.push(
    
        <td>
          <img src="sun.png"></img>
          <ul>
          
            <li>{temp ? "max:  " + Math.max(...temp) : null}</li>
            <li>{temp ? "min:  " + Math.min(...temp) : null}</li>
            <li>{bigItems ? bigItems[i][0]["forecast"][0] : null}</li> 
          </ul>
        </td>
      );
    }
    
    /*axios
      .get(`http://localhost:5000/splash?query=${bigItems[i][0]["forecast"][0]}`)
      .then((response) => {
        var url = (response.data.url);
        console.log(url, "response")
      });*/
      cell.push(
    
        <td>
          <img src="sun.png"></img>
          <ul>
          
            <li>{temp ? "max:  " + Math.max(...temp) : null}</li>
            <li>{temp ? "min:  " + Math.min(...temp) : null}</li>
            <li>{bigItems ? bigItems[i][0]["forecast"][0] : null}</li> 
          </ul>
        </td>
      );
    
  }
  
  console.log(bigItems, "sub")
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

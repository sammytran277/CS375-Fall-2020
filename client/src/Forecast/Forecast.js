import React from "react";
import "./Forecast.css";

const Forecast = ({ value }) => {
  const items = [];
  for (var i = 1; i < value.data.length; i++) {
    if (
      value.data[i]["date"].split(",")[0] !=
      value.data[i - 1]["date"].split(",")[0]
    ) {
      items.push(
        <td>
          <ul>
            <li>
              {value.data ? value.data[i - 1]["date"].split(",")[0] : null}
            </li>
            <li>{value.data ? value.data[i - 1]["forecast"][0] : null}</li>
          </ul>
        </td>
      );
    }
  }

  console.log(typeof value.data);

  return (
    <div>
      <table>
        <tr>{items}</tr>
      </table>
    </div>
  );
};

export default Forecast;

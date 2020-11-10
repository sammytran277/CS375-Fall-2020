const express = require("express");
const app = express();

const PORT = 3000;
const HOSTNAME = "localhost";

// TODO: GET request handler that takes a search term and returns random landscape oriented image relevant to search term
// https://unsplash.com/documentation#get-a-random-photo
app.get();

// TODO: GET request handler that takes in zip code and returns current weather, city, weather desc
// https://openweathermap.org/current#zip
app.get();

// TODO: Get request handler that gets forecast in 3-hour chunks (like from the HW)
// https://openweathermap.org/forecast5
// NOTE: This free endpoint only supports 5-day forecasts, so we'll have to work with that
app.get();

// TODO: GET request handler that gets all comments for a particular day and zip code
app.get();

// TODO: POST request that allows user to add a comment about the weather for a particular day and zip code
app.post();

app.listen(PORT, HOSTNAME, () => {
  console.log(`Listening at http://${HOSTNAME}:${PORT}`);
});
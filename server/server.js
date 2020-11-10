const express = require("express");
let axios = require("axios");

const app = express();

const PORT = 3000;
const HOSTNAME = "localhost";


let apiFile = require("./env.json");
console.log(apiFile)
let apiKey = apiFile["api_key"];
let baseUrl = apiFile["base_api_url"];

// TODO: GET request handler that takes a search term and returns random landscape oriented image relevant to search term
// https://unsplash.com/documentation#get-a-random-photo
app.get("/splash/", function(req, res){

});

// TODO: GET request handler that takes in zip code and returns current weather, city, weather desc
// https://openweathermap.org/current#zip

app.get("/current/", function(req, res){
	zip = req.query.zip;
	axios.get(`api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=imperial`).then(function (response) {

		console.log(response)
		res.json({"cod":200, "data": response});
	}).catch(error => {
		console.log(error);
		res.status(error.response.data["cod"]).json({
		    "cod": error.response.data["cod"],
		    "message": error.response.data["message"]});
	});
}
);

// TODO: Get request handler that gets forecast in 3-hour chunks (like from the HW)
// https://openweathermap.org/forecast5
// NOTE: This free endpoint only supports 5-day forecasts, so we'll have to work with that
app.get("/forecast/", function(req, res){
	zip = req.query.zip;
	axios.get(`${baseUrl}?zip=${zip}&appid=${apiKey}&units=imperial`).then(function (response) {
		ret = []
		for(var forecast of response["data"]["list"]){
			//console.log(forecast)
			var date = new Date(forecast["dt_txt"])
			//got the options from https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date
			date = `${date.toLocaleDateString("en-US", {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} @ ${date.toLocaleTimeString()} `
			ret.push({"date": date, "forecast": [forecast.weather[0].description, forecast.weather[0].icon], "temp":convertToFahrenheit(forecast.main.temp)})
		}
		console.log(res)
		res.json({"cod":200, "data": ret, "city":response['data']['city']['name']});
	}).catch(error => {
		console.log(error);
		res.status(error.response.data["cod"]).json({
		    "cod": error.response.data["cod"],
		    "message": error.response.data["message"]});
	});
});


// TODO: GET request handler that gets all comments for a particular day and zip code
//app.get();

// TODO: POST request that allows user to add a comment about the weather for a particular day and zip code
//app.post();

app.listen(PORT, HOSTNAME, () => {
  console.log(`Listening at http://${HOSTNAME}:${PORT}`);
});
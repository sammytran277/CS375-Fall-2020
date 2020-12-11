const express = require("express");
const pg = require("pg");
let axios = require("axios");
const moment = require("moment");
const cors = require("cors");

const app = express();

const PORT = 5000;
const HOSTNAME = "localhost";

let apiFile = require("./env.json");
const Pool = pg.Pool;
const pool = new Pool(apiFile["database"]);
pool.connect().then(function () {
    console.log(`Connected to database ${apiFile.database.database}`);
});
let apiKey = apiFile["api_key"];
let baseUrl = apiFile["base_api_url"];
let unsplashKey = apiFile["unsplash_key"]

app.use(cors());
app.use(express.json());

// TODO: GET request handler that takes a search term and returns random landscape oriented image relevant to search term
// https://unsplash.com/documentation#get-a-random-photo
app.get("/splash/", function(req, res){
	const query = req.query.query;
	axios.get(`https://api.unsplash.com/photos/random?client_id=${unsplashKey}&query=${query}`)
		.then(function (response) {
			console.log(response.data)
			res.json({"url": response.data["urls"]["raw"]})
		})
		.catch(error => {
			console.log(error);
		});
});

// TODO: GET request handler that takes in zip code and returns current weather, city, weather desc
// https://openweathermap.org/current#zip

app.get("/current/", function(req, res) {
	let zip = req.query.zip;
	console.log(zip);
	if(zip > 9999 && zip < 100000) {
		axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=imperial`).then(function (response) {
		const current = response.data.main.temp;
		const desc = response.data.weather[0].main;
		const city = response.data.name;
		const cod = response.data.cod;
		res.json({current, desc, city, cod});
	}).catch(error => {
		console.log(error);
	});
	} else {
		res.status(400);
		res.json({'error': "invalid date or zip"});	
	}
	
}
);

// TODO: Get request handler that gets forecast in 3-hour chunks (like from the HW)
// https://openweathermap.org/forecast5
// NOTE: This free endpoint only supports 5-day forecasts, so we'll have to work with that
app.get("/forecast/", function(req, res){
	let zip = req.query.zip;
	if(zip > 9999 && zip < 100000) {
		axios.get(`${baseUrl}?zip=${zip}&appid=${apiKey}&units=imperial`).then(function (response) {
		ret = []
		for(var forecast of response["data"]["list"]){
			//console.log(forecast)
			var date = new Date(forecast["dt_txt"])
			//got the options from https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date
			date = `${date.toLocaleDateString("en-US", {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} @ ${date.toLocaleTimeString()} `
			ret.push({"date": date, "forecast": [forecast.weather[0].description, forecast.weather[0].icon], "temp":forecast.main.temp})
		}
		console.log(res)
		res.json({"cod":200, "data": ret, "city":response['data']['city']['name']});
		}).catch(error => {
			console.log(error);
			res.status(error.response.data["cod"]).json({
			    "cod": error.response.data["cod"],
			    "message": error.response.data["message"]});
		});
	} else {
		res.status(400);
		res.json({'error': "invalid date or zip"});	
	}
});


// TODO: GET request handler that gets all comments for a particular day and zip code
app.get("/comments/", function(req, res){
	let zip = parseInt(req.query.zip);
	let date = req.query.date;

	if(zip > 9999 && zip < 100000) {
		
		var text = "SELECT * FROM comments where zip = $1 AND date = $2";
		var value = [zip, date];

		pool.query(text, value, (err, resp) => {
			if(err) {
				console.log(err.stack);
			} else {
				res.status(200);
				res.send(resp.rows);
			}
		});
	} else {
		res.status(400);
		res.json({'error': "invalid date or zip"});	
	}
});

// TODO: POST request that allows user to add a comment about the weather for a particular day and zip code
app.post('/comment/', function(req, res) {
    let data = req.body;
    console.log(data);

	// let date = moment().format('MM/DD/YYYY');
	let date = new Date();
	let zip = parseInt(data.zip);
	let comment = data.comment;
	
	if(('zip' in data) && ('comment' in data)) {
		const text = 'INSERT INTO comments(zip, comment, date) VALUES($1, $2, $3)';
        const values = [zip, comment, date];

        pool.query(text, values, (err, resp) => {
            if(err) {
                console.log(err.stack);
            } else {
                res.status(200);
                res.send({});
            }
        });
	} else {
        res.status(400);
        res.send({});
    }
});

app.listen(PORT, HOSTNAME, () => {
  console.log(`Listening at http://${HOSTNAME}:${PORT}`);
});

# Instant Weather

## Project Description

Instant Weather is a full stack web application that leverages the OpenWeatherMap and Unsplash APIs in order to display current and forecast weather data to the user.

Instant Weather was created by team ms.js (Mridul, Sammy, Julius, and Smrithi) during the fall 2020 term for CS-375-001, which is a web development class taught at Drexel University.

## Installation Instructions

1. Clone the repository to your local machine with `git clone`.
2. `cd` into `client/` and run `npm install` to download all the NPM packages needed to run the React application locally.
3. `cd` into `server/` and run `npm install` to download all the NPM packages needed to run the Express server locally.
4. Create a new PostgreSQL database by running `CREATE DATABASE dbname;` in the PostgreSQL shell.
5. Connect to the newly created database and run the following command to create the `comments` table:
```
CREATE TABLE comments (
 id serial PRIMARY KEY,
 zip INT NOT NULL,
 comment TEXT,
 date DATE NOT NULL
);
```
6. In `server/`, create a new file called `env.json` with the following format, filling in the API keys and database credentials:
```
{
	"api_key": "OPEN_WEATHER_MAP_API_KEY_HERE",
	"unsplash_key": "UNSPLASH_API_KEY_HERE",
	"base_api_url": "http://api.openweathermap.org/data/2.5/forecast",
	"database": {
		"user": "postgres",
		"host": "localhost",
		"database": "YOUR_DATABASE_NAME_HERE",
		"password": "YOUR_PASSWORD_HERE",
		"port": 5432
	}
}
```
7. `cd` into `server/` and run `node server.js` to start the Express server.
8. `cd` into `client/` and run `npm start` to start the React application.

# Weather Now
![Weather App Screenshot](https://github.com/collin-beisel-tm/weather-now/blob/main/assets/images/app-screenshot.PNG)

## App Description
- This application can be used to check the current weather, and 5-day weather forecast for any city the user searches for. Previous searches will be saved on the left hand side for easy access. This application leverages multiple endpoints from the OpenWeatherMap API.

## Technologies used
- HTML
- CSS
- JavaScript
- Bootstrap
- OpenWeatherApp Server Side API
- Git/GitHub

## Why did I build this project?
- I built this application as part of SMU's Full Stack Web Dev bootcamp. In this scenario I was tasked to build a weather app that can store current and forecast weather data for multiple cities.

## What did I learn?
- Building this application increased my knowledge of server side API integration, and dynamic HTML.

## Features
- search bar for users to look up any city
- search history pane for users to easily access previous searches
- current weather card that displays the City, Date, and current: Temp, humidity, Wind Speed, and UV Index
- 5 day forecast pane that displays cards for the next 5 days weather data
- Responsive design that works on both desktop and mobile

## How to install this application
- No installation is required to use this web application. Simply navigate to the url in your favorite web browser (not compatible with Internet Explorer).

## How to use this application
- Navigate to https://collin-beisel-tm.github.io/weather-now/
- enter your desired city in the search bar
- click the blue search icon to view weather for that city
- rinse and repeat for as many cities as you'd like
- visit your previously viewed cities weather reports by clicking the grey buttons in the history pane

## license
MIT License

Copyright (c) [2021] [CollinBeisel]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## User Story
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly

## Acceptance Criteria
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
// declare global variables
const cityEl = document.getElementById("enter-city");
const searchEl = document.getElementById("search-button");
const clearEl = document.getElementById("clear-history");
const nameEl = document.getElementById("city-name");
const currentPicEl = document.getElementById("current-pic");
const currentTempEl = document.getElementById("temperature");
const currentHumidityEl = document.getElementById("humidity");
const currentWindEl = document.getElementById("wind-speed");
const currentUVEl = document.getElementById("UV-index");
const historyEl = document.getElementById("history");
const APIKey = "6ae068cf85652675bf56d87186029e0d";
var fivedayEl = document.getElementById("fiveday-header");
var todayweatherEl = document.getElementById("today-weather");
let searchHistory = JSON.parse(localStorage.getItem("search")) || [];


//Function that will kick off the entire weather generator

    //function to grab data from the current weather endpoint
    var currentWeather = () => {
        let currentURL = "https://api.openweathermap.org/data/2.5/weather?q="+ "little elm" + "&units=imperial&APPID=" + APIKey;
        fetch(currentURL)
        .then(function (response) {
            response.json().then(function (data) {
                console.log(data);
                todayweatherEl.classList.remove("d-none");
            //take api response and feed it to front end elements for current weather
                let todayDate = data.name + " (" + luxon.DateTime.now().toLocaleString(luxon.DateTime.DATE_MED_WITH_WEEKDAY) + ") ";

                nameEl.innerHTML = todayDate;

                let weatherPic = data.weather[0].icon;
                currentPicEl.setAttribute("src", "https://openweathermap.org/img/wn/" + weatherPic + "@2x.png");
                currentPicEl.setAttribute("alt", data.weather[0].description);
                currentTempEl.innerHTML = "Temperature: " + (data.main.temp) + " &#176F";
                currentHumidityEl.innerHTML = "Humidity: " + data.main.humidity + "%";
                currentWindEl.innerHTML = "Wind Speed: " + data.wind.speed + " MPH";

                // fetch UV Index deta and change UI element color based on values
                let lat = data.coord.lat;
                let lon = data.coord.lon;
                let indexURL = "https://api.openweathermap.org/data/2.5/uvi/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey + "&cnt=1";
                fetch(indexURL)
                    .then(function (response) {
                        response.json().then(function (data) {
                            console.log(data);
                            let UVIndex = document.createElement("span");
                        
                            //show appropriate colors for UV safety.
                            if (data[0].value < 4 ) {
                                UVIndex.setAttribute("class", "badge badge-success");
                            }
                            else if (data[0].value < 7) {
                                UVIndex.setAttribute("class", "badge badge-warning");
                            }
                            else {
                                UVIndex.setAttribute("class", "badge badge-danger");
                            }
                            console.log(data[0].value)
                            UVIndex.innerHTML = data[0].value;
                            currentUVEl.innerHTML = "UV Index: ";
                            currentUVEl.append(UVIndex);
                        });   
                    });

                // Get 5 day forecast for this city
                let city = data.id;
                let fiveDayURL = "https://api.openweathermap.org/data/2.5/forecast?id=" + city + "&units=imperial&" + "&appid=" + APIKey;
                fetch(fiveDayURL)
                    .then(function (response) {

                        //  Parse response to display forecast for next 5 days
                        response.json().then(function (data) {
                            console.log(data);

                        fivedayEl.classList.remove("d-none");
                        const forecastEls = document.querySelectorAll(".forecast");
                        for (i = 0; i < forecastEls.length; i++) {
                            forecastEls[i].innerHTML = "";
                            const forecastIndex = i * 8 + 4;
                            const forecastDate = new Date(data.list[forecastIndex].dt * 1000);
                            const forecastDay = forecastDate.getDate();
                            const forecastMonth = forecastDate.getMonth() + 1;
                            const forecastYear = forecastDate.getFullYear();
                            const forecastDateEl = document.createElement("p");
                            forecastDateEl.setAttribute("class", "mt-3 mb-0 forecast-date");
                            forecastDateEl.innerHTML = forecastMonth + "/" + forecastDay + "/" + forecastYear;
                            forecastEls[i].append(forecastDateEl);

                            // Icon for current weather
                            const forecastWeatherEl = document.createElement("img");
                            forecastWeatherEl.setAttribute("src", "https://openweathermap.org/img/wn/" + data.list[forecastIndex].weather[0].icon + "@2x.png");
                            forecastWeatherEl.setAttribute("alt", data.list[forecastIndex].weather[0].description);
                            forecastEls[i].append(forecastWeatherEl);
                            const forecastTempEl = document.createElement("p");
                            forecastTempEl.innerHTML = "Temp: " + (data.list[forecastIndex].main.temp) + " &#176F";
                            forecastEls[i].append(forecastTempEl);
                            const forecastHumidityEl = document.createElement("p");
                            forecastHumidityEl.innerHTML = "Humidity: " + data.list[forecastIndex].main.humidity + "%";
                            forecastEls[i].append(forecastHumidityEl);
                            }
                        });
                    })
            });
        });

    // Get history from local storage if any
    searchEl.addEventListener("click", () => {
        const searchTerm = cityEl.value;
        currentWeather(searchTerm);
        searchHistory.push(searchTerm);
        localStorage.setItem("search", JSON.stringify(searchHistory));
        renderSearchHistory();
    })

    // Clear History button
    clearEl.addEventListener("click", () =>  {
        localStorage.clear();
        searchHistory = [];
        renderSearchHistory();
    })


    function renderSearchHistory() {
        historyEl.innerHTML = "";
        for (let i = 0; i < searchHistory.length; i++) {
            const historyItem = document.createElement("input");
            historyItem.setAttribute("type", "text");
            historyItem.setAttribute("readonly", true);
            historyItem.setAttribute("class", "form-control d-block bg-white");
            historyItem.setAttribute("value", searchHistory[i]);
            historyItem.addEventListener("click", function () {
                currentWeather(historyItem.value);
            })
            historyEl.append(historyItem);
        }
    }

    renderSearchHistory();
    if (searchHistory.length > 0) {
        currentWeather(searchHistory[searchHistory.length - 1]);
    }

    };


currentWeather();
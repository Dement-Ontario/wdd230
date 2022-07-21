const tempToday = document.getElementById('weather-temp-today');
const iconToday = document.getElementById('weather-icon-today');
const conditionToday = document.getElementById('weather-condition-today');
const humidityToday = document.getElementById('weather-humidity-today');

const iconDay1 = document.getElementById('forecast-icon-1');
const tempDay1 = document.getElementById('forecast-temp-1');
const iconDay2 = document.getElementById('forecast-icon-2');
const tempDay2 = document.getElementById('forecast-temp-2');
const iconDay3 = document.getElementById('forecast-icon-3');
const tempDay3 = document.getElementById('forecast-temp-3');

const weatherAlert = document.getElementById('home-weather-alert')

const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=38.98336&lon=-77.09555&units=imperial&exclude=minutely,hourly&appid=ca2889fa1d2db238e71bf879578b7164';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(weatherData) {
    tempToday.innerHTML = `${weatherData.current.temp.toFixed(0)}°F`;
    humidityToday.innerHTML = weatherData.current.humidity.toFixed(1);

    const iconSrcToday = `https://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`;
    const desc = weatherData.current.weather[0].description;

    iconToday.setAttribute('src', iconSrcToday);
    iconToday.setAttribute('alt', desc);
    conditionToday.textContent = desc;

    // Forecast Day 1
    tempDay1.innerHTML = `${weatherData.daily[0].temp.day.toFixed(0)}°F`;
    
    const iconSrcDay1 = `https://openweathermap.org/img/wn/${weatherData.daily[0].weather[0].icon}@2x.png`;
    const descDay1 = weatherData.daily[0].weather[0].description;

    iconDay1.setAttribute('src', iconSrcDay1);
    iconDay1.setAttribute('alt', descDay1);

    // Forecast Day 2
    tempDay2.innerHTML = `${weatherData.daily[1].temp.day.toFixed(0)}°F`;

    const iconSrcDay2 = `https://openweathermap.org/img/wn/${weatherData.daily[1].weather[0].icon}@2x.png`;
    const descDay2 = weatherData.daily[1].weather[0].description;

    iconDay2.setAttribute('src', iconSrcDay2);
    iconDay2.setAttribute('alt', descDay2);

    // Forecast Day 3
    tempDay3.innerHTML = `${weatherData.daily[2].temp.day.toFixed(0)}°F`;

    const iconSrcDay3 = `https://openweathermap.org/img/wn/${weatherData.daily[2].weather[0].icon}@2x.png`;
    const descDay3 = weatherData.daily[2].weather[0].description;

    iconDay3.setAttribute('src', iconSrcDay3);
    iconDay3.setAttribute('alt', descDay3);

    if(weatherData.hasOwnProperty('alerts')) {
        weatherAlert.classList.toggle('gone');
        weatherAlert.innerHTML = weatherData.alerts[0].description;
    } else {
        return;
    }
}

weatherAlert.onclick = function() {
    weatherAlert.classList.toggle('gone');
};
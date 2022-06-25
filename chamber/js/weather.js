let windChill;
const windChillElement = document.getElementById('wind-chill');
const windSpeedElement = document.getElementById('wind-speed');
const currentTemp = document.getElementById('temperature');
const weatherIcon = document.getElementById('home-weather-icon');
const captionDesc = document.getElementById('home-weather-sun');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Cambridge,GB&units=metric&appid=ca2889fa1d2db238e71bf879578b7164';

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
    currentTemp.innerHTML = weatherData.main.temp.toFixed(0);
    windSpeedElement.innerHTML = (weatherData.wind.speed * 3.6).toFixed(1);

    // These ones are used to calculate wind chill
    const temperatureFahr = (currentTemp.innerHTML * (9/5)) + 32;
    const windSpeedMph = (windSpeedElement.innerHTML / 1.609344);

    windChill = calculateWindChill(temperatureFahr, windSpeedMph);

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;

    if(windChill != "N/A") {
        const windChillCelc = (windChill - 32) * (5/9);
        windChillElement.innerHTML = `${Math.round(windChillCelc)}°C`;
    }
    else {
        windChillElement.innerHTML = windChill;
    }
}

function calculateWindChill(temperature, windSpeed) {
    if(temperature <= 50 && windSpeed > 3) {
        // f = 35.74 + 0.6215t - 35.75s^0.16 + 0.4275ts^0.16
        return 35.74 + (0.6215 * temperature) - (35.75 * (windSpeed ** 0.16)) + (0.4275 * temperature * (windSpeed ** 0.16));
    }
    else {
        return "N/A";
    }
}
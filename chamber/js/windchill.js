let windChill;
const windChillElement = document.getElementById("wind-chill");
const windSpeedElement = document.getElementById("wind-speed");
const temperatureElement = document.getElementById("temperature");

// These ones are used to calculate wind chill
const temperatureFahr = (temperatureElement.innerHTML * (9/5)) + 32;
const windSpeedMph = (windSpeedElement.innerHTML / 1.609344);

function calculateWindChill(temperature, windSpeed) {
    if(temperature <= 50 && windSpeed > 3) {
        // f = 35.74 + 0.6215t - 35.75s^0.16 + 0.4275ts^0.16
        return 35.74 + (0.6215 * temperature) - (35.75 * (windSpeed ** 0.16)) + (0.4275 * temperature * (windSpeed ** 0.16));
    }
    else {
        return "N/A";
    }
}

windChill = calculateWindChill(temperatureFahr, windSpeedMph);

if(windChill != "N/A") {
    const windChillCelc = (windChill - 32) * (5/9);
    windChillElement.innerHTML = `${Math.round(windChillCelc)}°C`;
}
else {
    windChillElement.innerHTML = windChill;
}
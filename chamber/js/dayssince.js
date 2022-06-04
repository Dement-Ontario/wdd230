const daysSince = document.getElementById("days-since");

let previousDay = Number(window.localStorage.getItem("last-time"));

if(previousDay !== 0) {
    daysSince.innerHTML = Math.floor((Date.now() - previousDay) / 86400000);
} else {
    daysSince.innerHTML = 0;
}


localStorage.setItem("last-time", Date.now());
const daysSince = document.getElementById("days-since");

let previousDay = Number(window.localStorage.getItem("last-time"));

daysSince.innerHTML = Math.floor((Date.now() - previousDay) / 86400000);

localStorage.setItem("last-time", Date.now());
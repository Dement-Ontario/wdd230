const now = new Date();
const fullDate = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
const year = now.getFullYear();
const today = now.getDay();

document.querySelector(".current-date").innerHTML = fullDate;

document.querySelector("#small-copyright-year").innerHTML = year;

document.getElementById("small-last-updated").innerHTML = document.lastModified;

document.querySelector("#medium-copyright-year").innerHTML = year;

document.getElementById("medium-last-updated").innerHTML = document.lastModified;

function toggleMenu() {
    document.getElementById("hamburger-nav").classList.toggle("open");
    document.getElementById("hamburger-button").classList.toggle("open");
}

const x = document.getElementById("hamburger-button");

x.onclick = toggleMenu;

const meetGreetMsg = document.getElementById("home-meet-greet-msg");

if(today === 1 || today === 2) {
    meetGreetMsg.style.display = "block";
}
else {
    meetGreetMsg.style.display = "none";
}
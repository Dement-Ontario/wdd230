const theDate = new Date;
const year = theDate.getFullYear();

document.querySelector("#home-copyright-year").innerHTML = year;

document.getElementById("home-last-updated").innerHTML = document.lastModified;
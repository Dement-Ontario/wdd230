const theDate = new Date;
const year = theDate.getFullYear();

document.querySelector("#planning-copyright-year").innerHTML = year;

document.getElementById("planning-last-updated").innerHTML = document.lastModified;
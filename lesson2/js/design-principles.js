const theDate = new Date;
const year = theDate.getFullYear();

document.querySelector("#design-copyright-year").innerHTML = year;

document.getElementById("design-last-updated").innerHTML = document.lastModified;
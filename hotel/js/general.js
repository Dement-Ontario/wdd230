document.getElementById("last-updated").innerHTML = `Last Updated: ${document.lastModified}`;

function toggleMenu() {
    document.getElementById("primary-nav").classList.toggle("open");
    document.getElementById("hamburger-button").classList.toggle("open");
}

const burgerButton = document.getElementById("hamburger-button");

burgerButton.onclick = toggleMenu;

const now = new Date();

const formDate = document.getElementById('form-date');

formDate.value = now;
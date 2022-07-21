const data = 'json/temples.json';
const cards = document.querySelector('.temples-cards');

fetch(data)
.then(function(response) {
    return response.json();
})
.then(function(jsonObject) {
    // console.table(jsonObject);
    const temples = jsonObject['temples'];
    temples.forEach(displayTemples);
});

function displayTemples(temple) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let photo = document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let email = document.createElement('p');
    let services = document.createElement('ul');
    let history = document.createElement('ul');
    let ordinanceSched = document.createElement('ul');
    let sessionSched = document.createElement('ul');
    let tempCloseSched = document.createElement('ul');
    let likeButton = document.createElement('p');

    h2.textContent = temple.name;
    address.textContent = temple.address;
    phone.textContent = temple.phone;
    email.textContent = temple.email;
    temple.services.forEach(function(service) {
        let listItem = document.createElement('li');
        listItem.textContent = service;
        services.appendChild(listItem);
    });
    temple.history.forEach(function(milestone) {
        let listItem = document.createElement('li');
        listItem.textContent = milestone;
        history.appendChild(listItem);
    });
    temple.ordinancesched.forEach(function(ordinance) {
        let listItem = document.createElement('li');
        listItem.textContent = ordinance;
        ordinanceSched.appendChild(listItem);
    });
    temple.sessionsched.forEach(function(session) {
        let listItem = document.createElement('li');
        listItem.textContent = session;
        sessionSched.appendChild(listItem);
    });
    temple.tempclosesched.forEach(function(closingTime) {
        let listItem = document.createElement('li');
        listItem.textContent = closingTime;
        tempCloseSched.appendChild(listItem);
    });
    
    let hasLiked = window.localStorage.getItem(`liked-${temple.shortname}`);
    if(hasLiked !== 'yes') {
        likeButton.textContent = 'Like this Temple';
    } else {
        likeButton.textContent = 'Liked 👍';
    }

    likeButton.onclick = function() {
        if(hasLiked !== 'yes') {
            likeButton.textContent = 'Liked 👍';
            localStorage.setItem(`liked-${temple.shortname}`, 'yes');
            hasLiked = window.localStorage.getItem(`liked-${temple.shortname}`);
        } else {
            likeButton.textContent = 'Like this Temple';
            localStorage.setItem(`liked-${temple.shortname}`, 'no');
            hasLiked = window.localStorage.getItem(`liked-${temple.shortname}`);
        }
    }

    photo.setAttribute('src', temple.imgsrc);
    photo.setAttribute('alt', `Photo of ${temple.name}`);

    likeButton.classList.add('like-button');

    card.appendChild(h2);
    card.appendChild(photo);
    makeTitle('Address', card);
    card.appendChild(address);
    makeTitle('Phone Number', card);
    card.appendChild(phone);
    makeTitle('Email', card);
    card.appendChild(email);
    makeTitle('Services', card);
    card.appendChild(services);
    makeTitle('History', card);
    card.appendChild(history);
    makeTitle('Ordinance Schedule', card);
    card.appendChild(ordinanceSched);
    makeTitle('Session Schedule', card);
    card.appendChild(sessionSched);
    makeTitle('Closing Schedule (2022)', card);
    card.appendChild(tempCloseSched);

    card.appendChild(likeButton);

    document.querySelector('div.temples-cards').appendChild(card);
}

function makeTitle(titleName, appendage) {
    h3 = document.createElement('h3');
    h3.textContent = titleName;
    appendage.appendChild(h3);
}
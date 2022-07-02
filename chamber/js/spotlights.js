const data = 'json/data.json';
let spotlightCount = 0;

fetch(data)
.then(function(response) {
    return response.json();
})
.then(function(jsonObject) {
    // console.table(jsonObject);
    let goldSpotlights = [];
    const businesses = jsonObject['businesses'];
    businesses.forEach(function(business) {
        if(business.memberlevel === "Gold") {
            goldSpotlights.splice(Math.floor(Math.random() * (goldSpotlights.length + 1)), 0, business);
        } else {
            return;
        }
    });
    goldSpotlights.forEach(displayBusinesses);
});

function displayBusinesses(business) {
    if(spotlightCount !== 3) {
        let spotlight = document.createElement('div');
        let title = document.createElement('h3');
        let icon = document.createElement('img');
        let desc = document.createElement('p');
        let contact = document.createElement('p');

        title.textContent = `${business.name}`;
        desc.textContent = `${business.description}`;
        contact.innerHTML = `contact@${business.siteurl}<br>${business.phonenumber}`;

        spotlight.setAttribute('class', 'spotlight');
        if(spotlightCount === 2) {
            spotlight.setAttribute('id', 'home-spotlight-three');
        }

        icon.setAttribute('src', business.imageurl);
        icon.setAttribute('alt', `Icon of ${business.name}`);
        icon.setAttribute('loading', 'lazy');

        contact.setAttribute('class', 'spotlight-contact');

        spotlight.appendChild(title);
        spotlight.appendChild(icon);
        spotlight.appendChild(desc);
        spotlight.appendChild(contact);

        document.querySelector('div#home-spotlights').appendChild(spotlight);
        spotlightCount += 1;
    } else {
        return;
    }
}
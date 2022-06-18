const data = 'json/data.json';
const cards = document.querySelector('.directory-cards');
const gridBtn = document.getElementById('dir-grid-button');
const listBtn = document.getElementById('dir-list-button');

fetch(data)
.then(function(response) {
    return response.json();
})
.then(function(jsonObject) {
    // console.table(jsonObject);
    const businesses = jsonObject['businesses'];
    businesses.forEach(displayBusinesses);
});

function displayBusinesses(business) {
    let card = document.createElement('section');
    let h4 = document.createElement('h4');
    let icon = document.createElement('img');
    let address = document.createElement('p');
    let phoneNumber = document.createElement('p');
    let siteUrl = document.createElement('p');
    let memberLevel = document.createElement('p');
    

    h4.textContent = `${business.name}`;
    address.textContent = `Address: ${business.address}`;
    phoneNumber.textContent = `Phone Number: ${business.phonenumber}`;
    siteUrl.textContent = `Website URL: ${business.siteurl}`;
    memberLevel.textContent = `Membership Level: ${business.memberlevel}`;

    icon.setAttribute('src', business.imageurl);
    icon.setAttribute('alt', `Icon of ${business.name}`);
    icon.setAttribute('loading', 'lazy');

    card.appendChild(h4);
    card.appendChild(icon);
    card.appendChild(address);
    card.appendChild(phoneNumber);
    card.appendChild(siteUrl);
    card.appendChild(memberLevel);


    document.querySelector('div.directory-cards').appendChild(card);
}

function makeDirList() {cards.classList.add('is-list')}

function makeDirGrid() {cards.classList.remove('is-list')}

gridBtn.onclick = makeDirGrid;
listBtn.onclick = makeDirList;
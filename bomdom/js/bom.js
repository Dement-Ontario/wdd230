const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', function() {
    if(input.value != '') {
        const inputValue = input.value;
        input.value = '';

        let listItem = document.createElement('li');
        let deleteButton = document.createElement('button');

        deleteButton.setAttribute('aria-label', `Remove ${inputValue}`);

        listItem.innerHTML = inputValue;
        deleteButton.textContent = '❌';

        listItem.appendChild(deleteButton);
        list.appendChild(listItem);

        deleteButton.addEventListener('click', function() {
            list.removeChild(listItem);
            input.focus();
        });

        input.focus();
    }
});
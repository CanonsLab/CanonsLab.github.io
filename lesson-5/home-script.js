const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        h2.textContent = towns[i].name;
        card.appendChild(h2)
        let h4 = document.createElement('h4');
        h4.textContent = towns[i].motto;
        card.appendChild(h4);
        let founded = document.createElement('p');
        founded.textContent = 'Year Founded: ' + towns[i].yearFounded;
        card.appendChild(founded);
        let population = document.createElement('p');
        population.textContent = 'Population: ' + towns[i].currentPopulation;
        card.appendChild(population);
        let rain = document.createElement('p');
        rain.textContent = 'Annual Rain Fall: ' + towns[i].averageRainFall;
        card.appendChild(rain);
        let image = document.createElement('img');
        image.setAttribute('src', towns[i].photo);
        image.setAttribute('alt', towns[i].name + ' photo');
        card.appendChild(image);

        document.querySelector('div.container').appendChild(card);
    }
    });
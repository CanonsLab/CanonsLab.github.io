
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=3c3f395856a764140e870d104facaf6d'

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let speed = jsObject.wind.speed;

    let temp = jsObject.main.temp;

    let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);

    console.log(wc)

    wc = Math.floor(wc)

    wc = (wc > temp) ? temp : wc;

    console.log(wc)

    document.querySelector("#wind-chill").textContent = wc + '°F';
  });




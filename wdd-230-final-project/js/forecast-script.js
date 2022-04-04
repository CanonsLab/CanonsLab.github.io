const weatherInfo = 'https://api.openweathermap.org/data/2.5/weather?id=3530103&units=imperial&appid=3c3f395856a764140e870d104facaf6d'
const forecastInfo = 'https://api.openweathermap.org/data/2.5/forecast?id=3530103&units=imperial&appid=3c3f395856a764140e870d104facaf6d'


const daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];


fetch(weatherInfo)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = jsObject.main.temp;
	document.getElementById('weather-description').textContent = jsObject.weather[0].description;
	document.getElementById('humidity').textContent = jsObject.main.humidity;
	
  });
fetch(forecastInfo)
	.then((response) => response.json())
	.then((jsObject) => {
		console.log(jsObject);
		
		const datesOfWeather = jsObject["list"].filter((climate) =>{
			if (climate.dt_txt.includes(" 12:00:00")){
				return climate
			}})
			for (let x = 0; x < datesOfWeather.length; x++) {
				let card = document.createElement("section")
				card.setAttribute("class", "day-weather")
				let h3d = document.createElement("span")
				h3d.textContent = daynames[new Date(datesOfWeather[x].dt_txt).getDay()]
				h3d.setAttribute("class", "dayname")
				card.appendChild(h3d)
				document.querySelector("div.flex").appendChild(card)
				let img = document.createElement("img")
				img.setAttribute("src", 'https://openweathermap.org/img/w/' + datesOfWeather[x].weather[0].icon + '.png')
				img.setAttribute("alt", datesOfWeather[x].weather[0].description)
				img.setAttribute("id", "dayimg")
				card.appendChild(img)
				let h4t = document.createElement("span")
				h4t.textContent = datesOfWeather[x].main.temp + "°F"
				h4t.setAttribute("class", "day-label")
				card.appendChild(h4t)

			}
	}
	)
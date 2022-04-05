const weatherInfo = 'https://api.openweathermap.org/data/2.5/weather?id=3530103&units=imperial&appid=3c3f395856a764140e870d104facaf6d'
const forecastInfo = 'https://api.openweathermap.org/data/2.5/forecast?id=3530103&units=imperial&appid=3c3f395856a764140e870d104facaf6d'
const rentalInfo = 'https://raw.githubusercontent.com/CanonsLab/CanonsLab.github.io/main/wdd-230-final-project/data/rental_data.JSON'

const daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];

const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];

const d = new Date();
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();

const fulldate = `${dayName}, ${d.getDate()} ${monthName} ${year}`;

document.querySelector('#currentdate2').textContent = `Last updated: ${document.lastModified}`

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
fetch(rentalInfo)
	.then((response) => response.json())
	.then((jsObject) => {
		console.log(jsObject);
		document.getElementById('scooter-one').textContent = jsObject.rental_one[0].name;
		document.getElementById('capacity-one').textContent = jsObject.rental_one[0].max_persons;
		document.getElementById('h-day-r-one').textContent = jsObject.rental_one[0].half_day_r;
		document.getElementById('f-day-r-one').textContent = jsObject.rental_one[0].full_day_r;
		document.getElementById('h-day-w-one').textContent = jsObject.rental_one[0].half_day_w;
		document.getElementById('f-day-w-one').textContent = jsObject.rental_one[0].full_day_w;
		document.getElementById('scooter-two').textContent = jsObject.rental_two[1].name;
		document.getElementById('capacity-two').textContent = jsObject.rental_two[1].max_persons;
		document.getElementById('h-day-r-two').textContent = jsObject.rental_two[1].half_day_r;
		document.getElementById('f-day-r-two').textContent = jsObject.rental_two[1].full_day_r;
		document.getElementById('h-day-w-two').textContent = jsObject.rental_two[1].half_day_w;
		document.getElementById('f-day-w-two').textContent = jsObject.rental_two[1].full_day_w;
		document.getElementById('scooter-three').textContent = jsObject.rental_one[2].name;
		document.getElementById('capacity-three').textContent = jsObject.rental_one[2].max_persons;
		document.getElementById('h-day-r-three').textContent = jsObject.rental_one[2].half_day_r;
		document.getElementById('f-day-r-three').textContent = jsObject.rental_one[2].full_day_r;
		document.getElementById('h-day-w-three').textContent = jsObject.rental_one[2].half_day_w;
		document.getElementById('f-day-w-three').textContent = jsObject.rental_one[2].full_day_w;
		document.getElementById('atv-one').textContent = jsObject.rental_one[3].name;
		document.getElementById('capacity-four').textContent = jsObject.rental_one[3].max_persons;
		document.getElementById('h-day-r-four').textContent = jsObject.rental_one[3].half_day_r;
		document.getElementById('f-day-r-four').textContent = jsObject.rental_one[3].full_day_r;
		document.getElementById('h-day-w-four').textContent = jsObject.rental_one[3].half_day_w;
		document.getElementById('f-day-w-four').textContent = jsObject.rental_one[3].full_day_w;
		document.getElementById('jeep-one').textContent = jsObject.rental_one[4].name;
		document.getElementById('capacity-five').textContent = jsObject.rental_one[4].max_persons;
		document.getElementById('h-day-r-five').textContent = jsObject.rental_one[4].half_day_r;
		document.getElementById('f-day-r-five').textContent = jsObject.rental_one[4].full_day_r;
		document.getElementById('h-day-w-five').textContent = jsObject.rental_one[4].half_day_w;
		document.getElementById('f-day-w-five').textContent = jsObject.rental_one[4].full_day_w;
		document.getElementById('jeep-two').textContent = jsObject.rental_one[5].name;
		document.getElementById('capacity-six').textContent = jsObject.rental_one[5].max_persons;
		document.getElementById('h-day-r-six').textContent = jsObject.rental_one[5].half_day_r;
		document.getElementById('f-day-r-six').textContent = jsObject.rental_one[5].full_day_r;
		document.getElementById('h-day-w-six').textContent = jsObject.rental_one[5].half_day_w;
		document.getElementById('f-day-w-six').textContent = jsObject.rental_one[5].full_day_w;
	});
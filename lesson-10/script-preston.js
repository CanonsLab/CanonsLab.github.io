const weatherInfo = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=3c3f395856a764140e870d104facaf6d'
const forecastInfo = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=3c3f395856a764140e870d104facaf6d'


fetch(weatherInfo)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = jsObject.main.temp;
	document.getElementById('weather-description').textContent = jsObject.weather[0].description;
    document.getElementById('high-temp').textContent = jsObject.main.temp_max;
	document.getElementById('humidity').textContent = jsObject.main.humidity;
	document.getElementById('wind-speed').textContent = jsObject.wind.speed;
  });
fetch(forecastInfo)
	.then((response) => response.json())
	.then((jsObject) => {
		console.log(jsObject);
		
		const datesOfWeather = jsObject["list"].filter((climate) =>{
			if (climate.dt_txt.includes(" 18:00:00")){
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


const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);


window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

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

document.getElementById("currentdate").textContent = fulldate;

const date2 = document.querySelector('#currentdate2');

// try {
//   const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
//   date2.textContent = new Date().toLocaleDateString('en-UK', options);
// } catch (e) {
//   alert('Error with code or your browser does not support Locale');
// }

if (dayName == "Friday") {
	var banner = document.createElement("div");
	banner.className = "b";
	banner.innerHTML = "Preston Pancakes in the Park! 9:00 a.m. Saturday at the city park pavilion.";

	document.body.insertBefore(banner,document.body.childNodes[0]).style.fontSize = "x-large";
	document.body.insertBefore(banner,document.body.childNodes[0]).style.textAlign = "center";
	document.body.insertBefore(banner,document.body.childNodes[0]).style.padding = "20px 20px 20px 20px";
	document.body.insertBefore(banner,document.body.childNodes[0]).style.backgroundColor = "#f5cf87";
}

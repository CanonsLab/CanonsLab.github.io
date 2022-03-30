
let speed = 5;
let temp = 38;

let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);

console.log(wc)

wc = Math.floor(wc)

wc = (wc > temp) ? temp : wc;

console.log(wc)

document.querySelector("#wind-chill").textContent = wc + '°F';


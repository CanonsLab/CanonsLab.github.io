const townUrl = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(townUrl)
    .then(function (responder) {
        return responder.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); const towns = jsonObject['towns'].filter((towns) => {
            if(towns.name==="Soda Springs") {
                return towns;
            }
        });
        for(let u=0; u<towns[0].events.length; u++) {
            let eventPiece = document.createElement('section');
            eventPiece.classList.add('event-portion');
            let tevents = document.createElement('p');
            tevents.textContent = towns[0].events[u];
            eventPiece.appendChild(tevents);
            document.querySelector('div.addings').appendChild(eventPiece);
        }
    })
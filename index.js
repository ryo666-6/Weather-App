// function onClick(city) {
//     let temperatureDegree = document.querySelector('.degree');
//     let weather = document.querySelector('.weather');
//     let places = ["Tokyo,JP", "NewYork,US", "London,UK", "Paris,FR", "Berlin,DE", "Shanghai,CN"];
//     for(let i = 0; i < places.length; i++) {
        
//     }
    

//     document.querySelector('.button-section').addEventListener('click', () => {
//         const api = `http://api.openweathermap.org/data/2.5/weather?q=${places}&appid=e8b390837bdaa5ecda28903339b6a197&lang=ja&units=metric`;
//         fetch(api)
//         .then(response => {
//             return response.json();
//         })
//         .then(data => {
//             console.log(data);
//             const { temp } = data.main;
//             const { description } = data.weather[0];
//             temperatureDegree.textContent = Math.floor(temp);
//             weather.textContent = description;
//     });
//     });
// }

// onClick('.tokyo');

function onClick(city) {
    let where = document.querySelector('.where');
    let temperatureDegree = document.querySelector('.degree');
    let weather = document.querySelector('.weather');
    let places = ["Tokyo,JP", "Seattle,US", "London,UK", "Paris,FR", "Berlin,DE", "Shanghai,CN"];
    let humidityNow = document.querySelector('.humidity');

     document.querySelectorAll(city).forEach(button => button.addEventListener('click', (e) => {
          const api = `http://api.openweathermap.org/data/2.5/weather?q=${e.target.dataset.key}&appid=e8b390837bdaa5ecda28903339b6a197&lang=ja&units=metric`;

          fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                const { name } = data;
                const { temp } = data.main;
                const { description } = data.weather[0];
                const { humidity } = data.main;

                where.textContent = name;
                weather.textContent = description;
                temperatureDegree.textContent = Math.floor(temp);
                humidityNow.textContent = humidity;
            }); 

    }));

}




onClick('.city');


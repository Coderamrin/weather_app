function getWeather(location, apikey ){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apikey}`, {mode:"cors"})
    .then(function(res) {
        return res.json(); 
    })
    .then(function(r) {
        console.log(r.wind.speed);
        console.log(r.main.temp);
        console.log(r.main.humidity);
    })
}

let location = "london";
let apikey = "2aa31b1d167d0f8341bd55e8c2aba6ae";

getWeather(location, apikey);
 
function getWeather(location, apikey ){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apikey}`, {mode:"cors"})
    .then(function(res) {
        return res.json(); 
    })
    .then(function(r) {
        dom.temp.textContent = "Temperature:" + r.main.temp + " C";
        dom.humidity.textContent = "Humidity:" + r.main.humidity + " %";
        dom.wind.textContent = "Wind:" + r.wind.speed + " km/h";
    });
}

let dom = (function () {
    let cityname = document.querySelector(".cityName");
    let search = document.querySelector(".search");
    let temp = document.querySelector(".temp");
    let humidity = document.querySelector(".humidity");
    let wind = document.querySelector(".wind");
    return {
        cityname,
        search,
        temp,
        humidity,
        wind,
    }
})();

let apikey="2aa31b1d167d0f8341bd55e8c2aba6ae"; 
function searchCb() {
    let location = dom.cityname.value;
    getWeather(location, apikey);
}

dom.search.addEventListener("click", searchCb);





 
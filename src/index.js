function getWeather(location, apikey ){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apikey}`, {mode:"cors"})
    .then(function(res) {
        return res.json(); 
    })
    .then(function(r) {
        dom.temp.textContent = r.main.temp + " C";
        dom.humidity.textContent = r.main.humidity + " %";
        dom.wind.textContent = r.wind.speed + " km/h";
    }); 
} 

let dom = (function () {
    let displayWeather = document.querySelector(".displayWeather");
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
        displayWeather,
    }
})();

let apikey="2aa31b1d167d0f8341bd55e8c2aba6ae"; 
function searchCb() {
    if(dom.cityname.value == "") {
        return
    }

    let location = dom.cityname.value;
    getWeather(location, apikey);
    dom.displayWeather.classList.remove("hide"); 
    dom.cityname.value = "";
    dom.cityname.placeholder = "enter city name"
}

dom.search.addEventListener("click", searchCb);





 
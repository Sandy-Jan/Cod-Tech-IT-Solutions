const inputBox = document.querySelector(".input-box");
const searchBtn = document.getElementById("searchBtn");
const weatherImg = document.querySelector(".weather-img");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("wind-speed");
const locationNotFound = document.querySelector(".location-not-found");
const weatherBody = document.querySelector(".weather-body");


async function checkWeather(city){
    const api_key = "c127500ddfa9d85e8e8e8884cc867027";
    const url =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());

    if(weather_data.cod ==404){
        locationNotFound.style.display = "flex";
        weatherBody.style.display = "none";
        console.log("error");
        return;
    } else {
        weatherBody.style.display = "flex";
        locationNotFound.style.display = "none";
    }

    temperature.innerHTML = `${Math.round(weather_data.main.temp-273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    windSpeed.innerHTML = `${weather_data.wind.speed}km/H`
    console.log(weather_data);

    switch(weather_data.weather[0].main){
        case 'Clouds' : 
            weatherImg.src ="/imagesWeather/cloud.png" ; break;
            case 'Clear' : 
            weatherImg.src ="/imagesWeather/clear.png" ; break;
            case 'Rain' : 
            weatherImg.src ="/imagesWeather/rain.png" ; break;
            case 'Mist' : 
            weatherImg.src ="/imagesWeather/mist.png" ; break;
            case 'Snow' : 
            weatherImg.src ="/imagesWeather/snow.png" ; break;
    }
   
}
searchBtn.addEventListener('click', ()=> {
    checkWeather(inputBox.value);
})
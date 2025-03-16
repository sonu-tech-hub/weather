// import { getWeatherData } from './weather.mjs';

// const cityInput = document.querySelector('input[type="text"]');
// const cityNameElement = document.getElementById('city-name');
// const temperatureElement = document.getElementById('temperature');
// const weatherConditionElement = document.getElementById('weather-condition');

// cityInput.addEventListener('input', async (e) => {
//   const city = e.target.value;
//   const weatherData = await getWeatherData(city);
//   cityNameElement.textContent = weatherData.name;
//   temperatureElement.textContent = `Temperature: ${weatherData.main.temp}°C`;
//   weatherConditionElement.textContent = `Weather: ${weatherData.weather[0].description}`;
// });


// api key ti fatch dat fron api 
// https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=65bfba07f06053fd15a92367fb9997ec
// https://pro.openweathermap.org/data/2.5/forecast/hourly?q=mathura&appid=65bfba07f06053fd15a92367fb9997ec

const citys = document.querySelector('.citys')
const weat = document.querySelector('.weather')
weat.innerHTML = 'hii'
// let text = citys.value;
citys.innerHTML = 'this is the text ot searct'
// console.log(text)





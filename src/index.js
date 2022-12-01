import fetchWeatherDataJSON from './fetch-weather'

const data = fetchWeatherDataJSON();
console.log(data)

fetch(
  "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=130589d71f758c19a3a8b6d6e7719a49",
  { mode: "cors" }
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
        console.log(error)
});
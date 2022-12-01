
async function fetchWeatherDataJSON(){

    const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=130589d71f758c19a3a8b6d6e7719a49',{mode:'cors'});
    const weatherData = await response.json();
    return weatherData
}

export default fetchWeatherDataJSON
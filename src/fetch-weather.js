async function fetchWeatherDataJSON(city, measurementSystem) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=130589d71f758c19a3a8b6d6e7719a49&units=${measurementSystem}`,
      { mode: "cors" }
    );
    console.log("logging in response after fetching");
    console.log(response);
    const weatherData = await response.json();
    const myWeatherDetails = {
      weatherCityName: weatherData.name,
      weatherCountry: weatherData.sys.country,
      weatherHumidity: weatherData.main.humidity,
      weatherType: weatherData.weather[0].main,
      weatherDescription: weatherData.weather[0].description,
      weatherTemperature: Math.ceil(weatherData.main.temp),
      weatherFeelsLike: Math.ceil(weatherData.main.feels_like),
      weatherPressure: weatherData.main.pressure,
      weatherVisibility: weatherData.visibility,
      weatherWindSpeed: weatherData.wind.speed,
      weatherClouds: weatherData.clouds.all,
      weatherIcon: weatherData.weather[0].icon,
    };

    return myWeatherDetails;
  } catch (error) {
    console.log(`we failed ${error}`);
  }
}

export default fetchWeatherDataJSON;

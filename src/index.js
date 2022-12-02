import fetchWeatherDataJSON from "./fetch-weather";
import getDom from "./DOM-manipulation";

const myWeatherData = async () => {
  const objWeatherData = await fetchWeatherDataJSON();

  getDom().city.textContent = objWeatherData.weatherCityName;
  getDom().country.textContent = objWeatherData.weatherCountry;
  getDom().weatherDescription.textContent = objWeatherData.weatherDescription;
  getDom().weatherIcon.src = `https://openweathermap.org/img/wn/${  objWeatherData.weatherIcon  }@2x.png`
  getDom().temperature.textContent = objWeatherData.weatherTemperature;
  getDom().feelsLike.textContent = objWeatherData.weatherFeelsLike;
  getDom().humidity.textContent = objWeatherData.weatherHumidity;
  getDom().pressure.textContent = objWeatherData.weatherPressure;
  getDom().windSpeed.textContent = objWeatherData.weatherWindSpeed;
  getDom().visibility.textContent = objWeatherData.weatherVisibility;

  console.log(objWeatherData);
};

myWeatherData();

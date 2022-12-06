import fetchWeatherDataJSON from "./fetch-weather";
import getDom from "./DOM-manipulation";
import getUserInput from "./get-user-input";
import backgroundAdjuster from "./background-adjuster";


const myWeatherData = async (cityToQuery) => {
  const objWeatherData = await fetchWeatherDataJSON(cityToQuery);

  getDom().city.textContent = objWeatherData.weatherCityName;
  getDom().country.textContent = objWeatherData.weatherCountry;
  getDom().weatherDescription.textContent = objWeatherData.weatherDescription;
  getDom().weatherIcon.src = `https://openweathermap.org/img/wn/${  objWeatherData.weatherIcon  }@2x.png`
  getDom().temperature.textContent = `${objWeatherData.weatherTemperature  }°C`;
  getDom().feelsLike.textContent = objWeatherData.weatherFeelsLike;
  getDom().humidity.textContent = objWeatherData.weatherHumidity;
  getDom().pressure.textContent = objWeatherData.weatherPressure;
  getDom().windSpeed.textContent = `${objWeatherData.weatherWindSpeed  } km`;
  getDom().visibility.textContent = objWeatherData.weatherVisibility;

  backgroundAdjuster(objWeatherData.weatherType,objWeatherData.weatherTemperature)

};



getDom().searchButton.addEventListener('click',queryAndDisplayData)

function queryAndDisplayData(){
  const cityToQuery = getUserInput()
  myWeatherData(cityToQuery);
}

queryAndDisplayData();

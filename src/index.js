import { get } from "lodash";
import fetchWeatherDataJSON from "./fetch-weather";
import getDom from "./DOM-manipulation";
import getUserInput from "./get-user-input";
import backgroundAdjuster from "./background-adjuster";


const myWeatherData = async (cityToQuery,systemToUse) => {
  const objWeatherData = await fetchWeatherDataJSON(cityToQuery,systemToUse);

  let tempToUse;
  
  if(systemToUse === "metric"){
    tempToUse = "°C"
  } else {
    tempToUse = "°F"
  }
  
  getDom().city.textContent = objWeatherData.weatherCityName;
  getDom().country.textContent = objWeatherData.weatherCountry;
  getDom().weatherDescription.textContent = objWeatherData.weatherDescription;
  getDom().weatherIcon.src = `https://openweathermap.org/img/wn/${  objWeatherData.weatherIcon  }@2x.png`
  getDom().temperature.textContent = Math.ceil(objWeatherData.weatherTemperature) + tempToUse;
  getDom().feelsLike.textContent = objWeatherData.weatherFeelsLike + tempToUse;
  getDom().humidity.textContent = `${objWeatherData.weatherHumidity  } %`;
  getDom().pressure.textContent = objWeatherData.weatherPressure;
  getDom().windSpeed.textContent = `${objWeatherData.weatherWindSpeed  } km`;
  getDom().visibility.textContent = `${objWeatherData.weatherVisibility  } m`;

  backgroundAdjuster(objWeatherData.weatherType,objWeatherData.weatherTemperature)

};

function getMeasurementSystem() {
  if(getDom().measurementToggle.checked){
    console.log("imperial")
    return "imperial"  
  } 
    console.log("metric")
    return "metric"
}

function setMeasurementSystem(){
  if(getDom().measurementToggle.checked){
    getDom().measurementToggle.checked = true
    getDom().measurementSystem.textContent = "°F"
  } else {
    getDom().measurementToggle.checked = false
    getDom().measurementSystem.textContent = "°C"
  }
}


getDom().searchButton.addEventListener('click',queryAndDisplayData)
getDom().measurementToggle.addEventListener('click',setMeasurementSystem)

function queryAndDisplayData(){
  const cityToQuery = getUserInput()
  const systemToUse = getMeasurementSystem()

  myWeatherData(cityToQuery,systemToUse);
}

queryAndDisplayData();

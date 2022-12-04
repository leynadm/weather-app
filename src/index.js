import fetchWeatherDataJSON from "./fetch-weather";
import getDom from "./DOM-manipulation";
import getUserInput from "./get-user-input";
import backgroundAdjuster from "./background-adjuster";


const myWeatherData = async (cityToQuery,measurementSystem) => {
  const objWeatherData = await fetchWeatherDataJSON(cityToQuery,measurementSystem);
  let tempMeasure;

  if(measurementSystem == 'metric'){
    tempMeasure = '°C'
  } else {
    tempMeasure = '°F'
  }
  const currentDateAndTime = new Date();
  getDom().city.textContent = objWeatherData.weatherCityName;
  getDom().country.textContent = objWeatherData.weatherCountry;
  getDom().weatherDescription.textContent = objWeatherData.weatherDescription;
  getDom().currentTime.textContent = currentDateAndTime.toLocaleString()
  getDom().weatherIcon.src = `https://openweathermap.org/img/wn/${  objWeatherData.weatherIcon  }@2x.png`
  getDom().temperature.textContent = `${objWeatherData.weatherTemperature} ${ tempMeasure}`;
  getDom().feelsLike.textContent = objWeatherData.weatherFeelsLike + tempMeasure;
  getDom().humidity.textContent = objWeatherData.weatherHumidity;
  getDom().pressure.textContent = objWeatherData.weatherPressure;
  getDom().windSpeed.textContent = `${objWeatherData.weatherWindSpeed  } km`;
  getDom().visibility.textContent = `${objWeatherData.weatherVisibility  } m`;

  backgroundAdjuster(objWeatherData.weatherType,objWeatherData.weatherTemperature)

};


getDom().searchButton.addEventListener('click',queryAndDisplayData)
getDom().measurementToggle.addEventListener('click',setMeasurementSystem)

function queryAndDisplayData(){
  const cityToQuery = getUserInput()
  const measurementSystem = getMeasurementSystem()
  myWeatherData(cityToQuery,measurementSystem);
}

function getMeasurementSystem(){
  let measurementSystem;
  if(getDom().measurementToggle.checked){
    measurementSystem = 'imperial'
    return measurementSystem
  } 
    measurementSystem = 'metric'
    return measurementSystem
}

function setMeasurementSystem(){
  if(getDom().measurementToggle.checked){
    getDom().measurementToggle.checked = true;
    getDom().toggleLabel.textContent = "°F"   
  } else {
    getDom().measurementToggle.checked = false;
    getDom().toggleLabel.textContent = "°C"
  }
 console.log(getDom().measurementToggle.checked); 
}

queryAndDisplayData();

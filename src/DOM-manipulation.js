function getDom() {
  const city = document.querySelector(".city");
  const country = document.querySelector(".country");
  const weatherDescription = document.querySelector(".weather-description");
  const weatherIcon = document.querySelector(".weather-icon");
  const currentTime = document.querySelector(".current-time");
  const temperature = document.querySelector(".temperature");
  const feelsLike = document.querySelector(".feels-like");
  const humidity = document.querySelector(".humidity");
  const pressure = document.querySelector(".weather-pressure");
  const windSpeed = document.querySelector(".wind-speed");
  const visibility = document.querySelector(".visibility");
  const searchButton = document.querySelector('.search-button')
  const backgroundImage = document.querySelector("html");
  const measurementToggle = document.querySelector('.toggle__input');
  const toggleLabel = document.querySelector('.measurement-system');
  return {
    city,
    country,
    weatherDescription,
    weatherIcon,
    currentTime,
    temperature,
    feelsLike,
    humidity,
    pressure,
    windSpeed,
    visibility,
    searchButton,
    backgroundImage,
    measurementToggle,
    toggleLabel
  };
  
}

export default getDom
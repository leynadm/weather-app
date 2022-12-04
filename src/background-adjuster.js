import getDom from "./DOM-manipulation";

function backgroundAdjuster(typeOfWeather, temperature) {
  console.log(temperature);
  console.log(temperature > 0);
  console.log(temperature < 0);
    console.log(typeOfWeather);
  switch (typeOfWeather) {
    case "Snow":
      getDom().backgroundImage.style.backgroundImage =
        "url(/src/images/snow.jpg)";
      break;
    case "Mist":
      getDom().backgroundImage.style.backgroundImage =
        "url(/src/images/mist.jpg)";
      break;
    case "Smoke":
      getDom().backgroundImage.style.backgroundImage =
        "url(/src/images/smoke.jpg)";
      break;
    case "Haze":
      getDom().backgroundImage.style.backgroundImage =
        "url(/src/images/haze.jpg)";
      break;
    case "Dust":
      getDom().backgroundImage.style.backgroundImage =
        "url(/src/images/dust.jpg)";
      break;
    case "Fog":
      getDom().backgroundImage.style.backgroundImage =
        "url(/src/images/fog.jpg)";
      break;
    case "Sand":
      getDom().backgroundImage.style.backgroundImage =
        "url(/src/images/sand.jpg)";
      break;
    case "Ash":
      getDom().backgroundImage.style.backgroundImage =
        "url(/src/images/ash.jpg)";
      break;
    case "Squall":
      getDom().backgroundImage.style.backgroundImage =
        "url(/src/images/squall.jpg)";
      break;
    case "Tornado":
      getDom().backgroundImage.style.backgroundImage =
        "url(/src/images/tornado.jpg)";
      break;
    case "Clear":
      getDom().backgroundImage.style.backgroundImage =
        "url(/src/images/clear.jpg)";
      break;
    case "Clouds":
      getDom().backgroundImage.style.backgroundImage =
        "url(/src/images/clouds.jpg)";
      break;
    case "Rain":
      getDom().backgroundImage.style.backgroundImage =
        "url(/src/images/rain-light-rain.jpg"
        break;
  }
}

export default backgroundAdjuster;

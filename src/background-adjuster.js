import getDom from "./DOM-manipulation";

function backgroundAdjuster(typeOfWeather, temperature) {
 console.log(typeOfWeather)
  switch (typeOfWeather) {
    case "Snow":
      getDom().backgroundImage.style.backgroundImage =
        "url(./images/snow.jpg)";
      break;
    case "Mist":
      getDom().backgroundImage.style.backgroundImage =
        "url(./images/mist.jpg)";
      break;
    case "Smoke":
      getDom().backgroundImage.style.backgroundImage =
        "url(./images/smoke.jpg)";
      break;
    case "Haze":
      getDom().backgroundImage.style.backgroundImage =
        "url(./images/haze.jpg)";
      break;
    case "Dust":
      getDom().backgroundImage.style.backgroundImage =
        "url(./images/dust.jpg)";
      break;
    case "Fog":
      getDom().backgroundImage.style.backgroundImage =
        "url(./images/fog.jpg)";
      break;
    case "Sand":
      getDom().backgroundImage.style.backgroundImage =
        "url(./images/sand.jpg)";
      break;
    case "Ash":
      getDom().backgroundImage.style.backgroundImage =
        "url(./images/ash.jpg)";
      break;
    case "Squall":
      getDom().backgroundImage.style.backgroundImage =
        "url(./images/squall.jpg)";
      break;
    case "Tornado":
      getDom().backgroundImage.style.backgroundImage =
        "url(./images/tornado.jpg)";
      break;
    case "Clear":
      getDom().backgroundImage.style.backgroundImage =
        "url(./images/clear.jpg)";
      break;
    case "Clouds":
      getDom().backgroundImage.style.backgroundImage =
        "url(./images/clouds.jpg)";
      break;
  }
}

export default backgroundAdjuster;

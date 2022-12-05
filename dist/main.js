/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOM-manipulation.js":
/*!*********************************!*\
  !*** ./src/DOM-manipulation.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction getDom() {\n  const city = document.querySelector(\".city\");\n  const country = document.querySelector(\".country\");\n  const weatherDescription = document.querySelector(\".weather-description\");\n  const weatherIcon = document.querySelector(\".weather-icon\");\n  const currentTime = document.querySelector(\".current-time\");\n  const temperature = document.querySelector(\".temperature\");\n  const feelsLike = document.querySelector(\".feels-like\");\n  const humidity = document.querySelector(\".humidity\");\n  const pressure = document.querySelector(\".weather-pressure\");\n  const windSpeed = document.querySelector(\".wind-speed\");\n  const visibility = document.querySelector(\".visibility\");\n  const searchButton = document.querySelector('.search-button')\n  const backgroundImage = document.querySelector(\"html\");\n  const measurementToggle = document.querySelector('.toggle__input');\n  const toggleLabel = document.querySelector('.measurement-system');\n  return {\n    city,\n    country,\n    weatherDescription,\n    weatherIcon,\n    currentTime,\n    temperature,\n    feelsLike,\n    humidity,\n    pressure,\n    windSpeed,\n    visibility,\n    searchButton,\n    backgroundImage,\n    measurementToggle,\n    toggleLabel\n  };\n  \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDom);\n\n//# sourceURL=webpack://weather-app/./src/DOM-manipulation.js?");

/***/ }),

/***/ "./src/background-adjuster.js":
/*!************************************!*\
  !*** ./src/background-adjuster.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _DOM_manipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM-manipulation */ \"./src/DOM-manipulation.js\");\n\n\nfunction backgroundAdjuster(typeOfWeather, temperature) {\n  console.log(temperature);\n  console.log(temperature > 0);\n  console.log(temperature < 0);\n    console.log(typeOfWeather);\n  switch (typeOfWeather) {\n    case \"Snow\":\n      (0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().backgroundImage.style.backgroundImage =\n        \"url(/src/images/snow.jpg)\";\n      break;\n    case \"Mist\":\n      (0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().backgroundImage.style.backgroundImage =\n        \"url(/src/images/mist.jpg)\";\n      break;\n    case \"Smoke\":\n      (0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().backgroundImage.style.backgroundImage =\n        \"url(/src/images/smoke.jpg)\";\n      break;\n    case \"Haze\":\n      (0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().backgroundImage.style.backgroundImage =\n        \"url(/src/images/haze.jpg)\";\n      break;\n    case \"Dust\":\n      (0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().backgroundImage.style.backgroundImage =\n        \"url(/src/images/dust.jpg)\";\n      break;\n    case \"Fog\":\n      (0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().backgroundImage.style.backgroundImage =\n        \"url(/src/images/fog.jpg)\";\n      break;\n    case \"Sand\":\n      (0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().backgroundImage.style.backgroundImage =\n        \"url(/src/images/sand.jpg)\";\n      break;\n    case \"Ash\":\n      (0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().backgroundImage.style.backgroundImage =\n        \"url(/src/images/ash.jpg)\";\n      break;\n    case \"Squall\":\n      (0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().backgroundImage.style.backgroundImage =\n        \"url(/src/images/squall.jpg)\";\n      break;\n    case \"Tornado\":\n      (0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().backgroundImage.style.backgroundImage =\n        \"url(/src/images/tornado.jpg)\";\n      break;\n    case \"Clear\":\n      (0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().backgroundImage.style.backgroundImage =\n        \"url(/src/images/clear.jpg)\";\n      break;\n    case \"Clouds\":\n      (0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().backgroundImage.style.backgroundImage =\n        \"url(/src/images/clouds.jpg)\";\n      break;\n    case \"Rain\":\n      (0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().backgroundImage.style.backgroundImage =\n        \"url(/src/images/rain-light-rain.jpg\"\n        break;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (backgroundAdjuster);\n\n\n//# sourceURL=webpack://weather-app/./src/background-adjuster.js?");

/***/ }),

/***/ "./src/fetch-weather.js":
/*!******************************!*\
  !*** ./src/fetch-weather.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nasync function fetchWeatherDataJSON(city, measurementSystem) {\n  try {\n    const response = await fetch(\n      `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=130589d71f758c19a3a8b6d6e7719a49&units=${measurementSystem}`,\n      { mode: \"cors\" }\n    );\n    console.log(\"logging in response after fetching\");\n    console.log(response);\n    const weatherData = await response.json();\n    const myWeatherDetails = {\n      weatherCityName: weatherData.name,\n      weatherCountry: weatherData.sys.country,\n      weatherHumidity: weatherData.main.humidity,\n      weatherType: weatherData.weather[0].main,\n      weatherDescription: weatherData.weather[0].description,\n      weatherTemperature: Math.ceil(weatherData.main.temp),\n      weatherFeelsLike: Math.ceil(weatherData.main.feels_like),\n      weatherPressure: weatherData.main.pressure,\n      weatherVisibility: weatherData.visibility,\n      weatherWindSpeed: weatherData.wind.speed,\n      weatherClouds: weatherData.clouds.all,\n      weatherIcon: weatherData.weather[0].icon,\n    };\n\n    \n    return myWeatherDetails;\n  } catch (error) {\n    console.log(`we failed ${error}`);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchWeatherDataJSON);\n\n\n//# sourceURL=webpack://weather-app/./src/fetch-weather.js?");

/***/ }),

/***/ "./src/get-user-input.js":
/*!*******************************!*\
  !*** ./src/get-user-input.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction getUserInput(){\n\n    const citySearchBox = document.querySelector(\"#city-search-box\").value;\n    return citySearchBox\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getUserInput);\n\n//# sourceURL=webpack://weather-app/./src/get-user-input.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fetch_weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch-weather */ \"./src/fetch-weather.js\");\n/* harmony import */ var _DOM_manipulation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM-manipulation */ \"./src/DOM-manipulation.js\");\n/* harmony import */ var _get_user_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-user-input */ \"./src/get-user-input.js\");\n/* harmony import */ var _background_adjuster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./background-adjuster */ \"./src/background-adjuster.js\");\n\n\n\n\n\n\nconst myWeatherData = async (cityToQuery,measurementSystem) => {\n  const objWeatherData = await (0,_fetch_weather__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cityToQuery,measurementSystem);\n  let tempMeasure;\n\n  if(measurementSystem == 'metric'){\n    tempMeasure = '°C'\n  } else {\n    tempMeasure = '°F'\n  }\n  const currentDateAndTime = new Date();\n  (0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().city.textContent = objWeatherData.weatherCityName;\n  (0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().country.textContent = objWeatherData.weatherCountry;\n  (0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().weatherDescription.textContent = objWeatherData.weatherDescription;\n  (0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().currentTime.textContent = currentDateAndTime.toLocaleString()\n  ;(0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().weatherIcon.src = `https://openweathermap.org/img/wn/${  objWeatherData.weatherIcon  }@2x.png`\n  ;(0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().temperature.textContent = `${objWeatherData.weatherTemperature} ${ tempMeasure}`;\n  (0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().feelsLike.textContent = objWeatherData.weatherFeelsLike + tempMeasure;\n  (0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().humidity.textContent = objWeatherData.weatherHumidity;\n  (0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().pressure.textContent = objWeatherData.weatherPressure;\n  (0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().windSpeed.textContent = `${objWeatherData.weatherWindSpeed  } km`;\n  (0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().visibility.textContent = `${objWeatherData.weatherVisibility  } m`;\n\n  (0,_background_adjuster__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(objWeatherData.weatherType,objWeatherData.weatherTemperature)\n\n};\n\n\n(0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().searchButton.addEventListener('click',queryAndDisplayData)\n;(0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().measurementToggle.addEventListener('click',setMeasurementSystem)\n\nfunction queryAndDisplayData(){\n  const cityToQuery = (0,_get_user_input__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n  const measurementSystem = getMeasurementSystem()\n  myWeatherData(cityToQuery,measurementSystem);\n}\n\nfunction getMeasurementSystem(){\n  let measurementSystem;\n  if((0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().measurementToggle.checked){\n    measurementSystem = 'imperial'\n    return measurementSystem\n  } \n    measurementSystem = 'metric'\n    return measurementSystem\n}\n\nfunction setMeasurementSystem(){\n  if((0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().measurementToggle.checked){\n    (0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().measurementToggle.checked = true;\n    (0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().toggleLabel.textContent = \"°F\"   \n  } else {\n    (0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().measurementToggle.checked = false;\n    (0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().toggleLabel.textContent = \"°C\"\n  }\n console.log((0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().measurementToggle.checked); \n}\n\nqueryAndDisplayData();\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
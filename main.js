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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction getDom() {\n  const city = document.querySelector(\".city\");\n  const country = document.querySelector(\".country\");\n  const weatherDescription = document.querySelector(\".weather-description\");\n  const weatherIcon = document.querySelector(\".weather-icon\");\n  const currentTime = document.querySelector(\".current-time\");\n  const temperature = document.querySelector(\".temperature\");\n  const feelsLike = document.querySelector(\".feels-like\");\n  const humidity = document.querySelector(\".humidity\");\n  const pressure = document.querySelector(\".weather-pressure\");\n  const windSpeed = document.querySelector(\".wind-speed\");\n  const visibility = document.querySelector(\".visibility\");\n  const searchButton = document.querySelector('.search-button')\n  const backgroundImage = document.querySelector(\"html\");\n  const measurementSystem = document.querySelector(\".measurement-system\");\n  const measurementToggle = document.querySelector(\".toggle__input\")\n\n  return {\n    city,\n    country,\n    weatherDescription,\n    weatherIcon,\n    currentTime,\n    temperature,\n    feelsLike,\n    humidity,\n    pressure,\n    windSpeed,\n    visibility,\n    searchButton,\n    backgroundImage,\n    measurementSystem,\n    measurementToggle \n  };\n  \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDom);\n\n//# sourceURL=webpack://weather-app/./src/DOM-manipulation.js?");

/***/ }),

/***/ "./src/background-adjuster.js":
/*!************************************!*\
  !*** ./src/background-adjuster.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _DOM_manipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM-manipulation */ \"./src/DOM-manipulation.js\");\n\n\nfunction backgroundAdjuster(typeOfWeather, temperature) {\n console.log(typeOfWeather)\n  switch (typeOfWeather) {\n    case \"Snow\":\n      ;(0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().backgroundImage.style.backgroundImage =\n        \"url(images/snow.jpg)\";\n      break;\n    case \"Mist\":\n      (0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().backgroundImage.style.backgroundImage =\n        \"url(images/mist.jpg)\";\n      break;\n    case \"Smoke\":\n      (0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().backgroundImage.style.backgroundImage =\n        \"url(images/smoke.jpg)\";\n      break;\n    case \"Haze\":\n      (0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().backgroundImage.style.backgroundImage =\n        \"url(images/haze.jpg)\";\n      break;\n    case \"Dust\":\n      (0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().backgroundImage.style.backgroundImage =\n        \"url(images/dust.jpg)\";\n      break;\n    case \"Fog\":\n      (0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().backgroundImage.style.backgroundImage =\n        \"url(images/fog.jpg)\";\n      break;\n    case \"Sand\":\n      (0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().backgroundImage.style.backgroundImage =\n        \"url(images/sand.jpg)\";\n      break;\n    case \"Ash\":\n      (0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().backgroundImage.style.backgroundImage =\n        \"url(images/ash.jpg)\";\n      break;\n    case \"Squall\":\n      (0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().backgroundImage.style.backgroundImage =\n        \"url(images/squall.jpg)\";\n      break;\n    case \"Tornado\":\n      (0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().backgroundImage.style.backgroundImage =\n        \"url(images/tornado.jpg)\";\n      break;\n    case \"Clear\":\n      (0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().backgroundImage.style.backgroundImage =\n        \"url(images/clear.jpg)\";\n      break;\n    case \"Clouds\":\n      (0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().backgroundImage.style.backgroundImage =\n        \"url(images/clouds.jpg)\";\n      break;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (backgroundAdjuster);\n\n\n//# sourceURL=webpack://weather-app/./src/background-adjuster.js?");

/***/ }),

/***/ "./src/fetch-weather.js":
/*!******************************!*\
  !*** ./src/fetch-weather.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// eslint-disable-next-line consistent-return\nasync function fetchWeatherDataJSON(city,systemToUse) {\n  try {\n    const response = await fetch(\n        `https://api.openweathermap.org/data/2.5/weather?q=${  city  }&APPID=130589d71f758c19a3a8b6d6e7719a49&units=${systemToUse}`,\n      { mode: \"cors\" }\n    );\n    \n    const weatherData = await response.json();\n    const myWeatherDetails = {\n      weatherCityName: weatherData.name,\n      weatherCountry: weatherData.sys.country,\n      weatherHumidity: weatherData.main.humidity,\n      weatherType: weatherData.weather[0].main,\n      weatherDescription: weatherData.weather[0].description,\n      weatherTemperature: weatherData.main.temp,\n      weatherFeelsLike: weatherData.main.feels_like,\n      weatherPressure: weatherData.main.pressure,\n      weatherVisibility: weatherData.visibility,\n      weatherWindSpeed: weatherData.wind.speed,\n      weatherClouds: weatherData.clouds.all,\n      weatherIcon: weatherData.weather[0].icon,\n    };\n\n    return myWeatherDetails;\n\n  } catch (error) {\n    console.log(`we failed ${error}`);\n    // eslint-disable-next-line no-alert\n    alert(`You added ${  city  } and this is not a city we could found`)\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchWeatherDataJSON);\n\n\n//# sourceURL=webpack://weather-app/./src/fetch-weather.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fetch_weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch-weather */ \"./src/fetch-weather.js\");\n/* harmony import */ var _DOM_manipulation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM-manipulation */ \"./src/DOM-manipulation.js\");\n/* harmony import */ var _get_user_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-user-input */ \"./src/get-user-input.js\");\n/* harmony import */ var _background_adjuster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./background-adjuster */ \"./src/background-adjuster.js\");\n\n\n\n\n\n\nconst myWeatherData = async (cityToQuery,systemToUse) => {\n  const objWeatherData = await (0,_fetch_weather__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cityToQuery,systemToUse);\n\n  let tempToUse;\n  \n  if(systemToUse === \"metric\"){\n    tempToUse = \"°C\"\n  } else {\n    tempToUse = \"°F\"\n  }\n  \n  (0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().city.textContent = objWeatherData.weatherCityName;\n  (0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().country.textContent = objWeatherData.weatherCountry;\n  (0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().weatherDescription.textContent = objWeatherData.weatherDescription;\n  (0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().weatherIcon.src = `https://openweathermap.org/img/wn/${  objWeatherData.weatherIcon  }@2x.png`\n  ;(0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().temperature.textContent = Math.ceil(objWeatherData.weatherTemperature) + tempToUse;\n  (0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().feelsLike.textContent = objWeatherData.weatherFeelsLike + tempToUse;\n  (0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().humidity.textContent = `${objWeatherData.weatherHumidity  } %`;\n  (0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().pressure.textContent = objWeatherData.weatherPressure;\n  (0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().windSpeed.textContent = `${objWeatherData.weatherWindSpeed  } km`;\n  (0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().visibility.textContent = `${objWeatherData.weatherVisibility  } m`;\n\n  (0,_background_adjuster__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(objWeatherData.weatherType,objWeatherData.weatherTemperature)\n\n};\n\nfunction getMeasurementSystem() {\n  if((0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().measurementToggle.checked){\n    console.log(\"imperial\")\n    return \"imperial\"  \n  } \n    console.log(\"metric\")\n    return \"metric\"\n}\n\nfunction setMeasurementSystem(){\n  if((0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().measurementToggle.checked){\n    (0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().measurementToggle.checked = true\n    ;(0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().measurementSystem.textContent = \"°F\"\n  } else {\n    (0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().measurementToggle.checked = false\n    ;(0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().measurementSystem.textContent = \"°C\"\n  }\n}\n\n\n// eslint-disable-next-line no-use-before-define\n(0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().searchButton.addEventListener('click',queryAndDisplayData)\n;(0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().measurementToggle.addEventListener('click',setMeasurementSystem)\n\nfunction queryAndDisplayData(){\n  const cityToQuery = (0,_get_user_input__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n  const systemToUse = getMeasurementSystem()\n\n  myWeatherData(cityToQuery,systemToUse);\n}\n\nqueryAndDisplayData();\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

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
import fetchWeatherDataJSON from './fetch-weather'


const myWeatherData = async() => {
  const objWeatherData = await fetchWeatherDataJSON()
  console.log(objWeatherData)
  return objWeatherData   
}

myWeatherData()


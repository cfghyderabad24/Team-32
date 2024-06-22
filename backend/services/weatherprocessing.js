// services/weatherprocessing.js

const { sendAlertMessage } = require('./alertmessage');

const processWeatherData = (weatherData) => {
  const weatherCondition = weatherData.weather[0].main;

  let alertMessage = '';

  switch (weatherCondition) {
    case 'Thunderstorm':
      alertMessage = 'Tomorrow we have thunderstorms so be alert';
      break;
    case 'Rain':
      alertMessage = 'Tomorrow we have rain so take precautions';
      break;
    case 'Snow':
      alertMessage = 'Tomorrow we have snowfall so be prepared';
      break;
    case 'Clear':
      alertMessage = 'Tomorrow the weather is clear';
      break;
    case 'Clouds':
      alertMessage = 'Tomorrow we have cloudy weather';
      break;
    // Add more cases as needed
    default:
      alertMessage = 'Tomorrow we have normal weather conditions';
  }

  if (alertMessage) {
    sendAlertMessage(alertMessage);
  }
};

module.exports = { processWeatherData };
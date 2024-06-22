
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const fetchWeather = async (city) => {
  const apiKey = process.env.OPENWEATHERMAP_API_KEY;
  
  try {
    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        q: city,
        appid: apiKey,
        units: 'metric' // or 'imperial' for Fahrenheit
      }
    });
    
    return response.data;
  } catch (error) {
    console.error('Error fetching weather:', error);
    throw error; // rethrow the error to handle it in the calling function
  }
};

module.exports = { fetchWeather };

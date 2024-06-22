const express = require('express');
const cron= require('node-cron');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const { fetchWeather } = require('./services/weatherservice');
const { processWeatherData } = require('./services/weatherprocessing');
const { getDistinctLocations } = require('./services/locationService');
const Farmer = require('./models/farmerModel'); 


// Load environment variables
dotenv.config();
const dbConfig= require('./config/dbConfig');

// Initialize Express app
const app = express();
// to destructure json format sent by login, signup
app.use(express.json())
//if api req is coming with api/user go and search in userRoute
app.use('/api/user', require('./routes/UserRoute'))
app.use('/api/farmer', require('./routes/farmerRoute'))

app.get('/api/locations', async (req, res) => {
  try {
    const locations = await getDistinctLocations();
    res.json(locations);
  } catch (error) {
    console.error('Error fetching locations:', error);
    res.status(500).send('Server Error');
  }
});

// Basic route to fetch weather data
app.get('/api/weather', async (req, res) => {
  const city = req.query.city || 'London'; // default city if not specified
  
  try {
    const weatherData = await fetchWeather(city); // call fetchWeather from weatherservice.js
    
    // Print the data to the console (optional for debugging)
    console.log(weatherData);

    // Process the weather data to generate alerts
    processWeatherData(weatherData);

    res.json(weatherData);
  } catch (error) {
    console.error('Error in /api/weather route:', error);
    res.status(500).send('Server Error');
  }
});

// Schedule a job to run every 12 hours
cron.schedule('*/5 * * * * *', async () => {
  console.log('Running scheduled weather check...');
  try {
    const locations = await getDistinctLocations();
    for (const city of locations) {
      const weatherData = await fetchWeather(city);
      const farmers = await Farmer.find({ location: city });
      processWeatherData(weatherData, farmers);
    }
  } catch (error) {
    console.error('Error during scheduled weather check:', error);
  }
});


// Define the port
const port = process.env.PORT || 5000;

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Connected to port ${port}`);
});



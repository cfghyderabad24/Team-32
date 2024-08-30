const Farmer = require('../models/farmerModel');

const getDistinctLocations = async () => {
  try {
    const locations = await Farmer.distinct('location');
    return locations;
  } catch (error) {
    console.error('Error fetching distinct locations:', error);
    throw error;
  }
};

module.exports = { getDistinctLocations };
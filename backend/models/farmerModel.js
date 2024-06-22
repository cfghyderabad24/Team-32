const mongoose = require('mongoose');

const farmerSchema = new mongoose.Schema({
    farmerName: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true
    },
    aadharNumber: {
        type: String,
        required: true,
        unique: true 
    },
    contactNumber: {
        type: String,
        required: true
    },
    areaPloughed: {
        type: Number,
        required: true
    },
    season: {
        type: String,
        required: true
    },
    cropGrown: {
        type: String,
        required: true
    },
    seedsUsed: {
        type: String,
        required: true
    },
    dateOfSeedSown: {
        type: Date,
        required: true
    },
    transplanting: {
        type: String,
        required: true
    },
    irrigationMethod: {
        type: String,
        required: true
    },
    fertilizersUse: {
        type: String,
        required: true
    },
    dateOfHarvesting: {
        type: Date,
        required: true
    },
    yield: {
        type: Number,
        required: true
    },
    location:{
        type: String,
        required: true
    }
}, {
    timeStamps: true 
});

const Farmer = mongoose.model('Farmers', farmerSchema);

module.exports = Farmer;

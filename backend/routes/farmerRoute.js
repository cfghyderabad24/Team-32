const express = require('express');
const router = express.Router();
const Farmer = require('../models/farmerModel'); 
const SoilAnalysis = require('../models/soilModel');
// Route to create a new farmer record
router.post('/farmers', async (req, res) => {
    try {
        const farmer = new Farmer(req.body);
        await farmer.save();
        res.status(201).send(farmer);
    } catch (error) {
        res.status(400).send(error);
    }
});
// Create a new soil analysis record
router.post('/soil-analysis', async (req, res) => {
    try {
      const soilAnalysis = new SoilAnalysis(req.body);
      await soilAnalysis.save();
      res.status(201).send(soilAnalysis);
    } catch (error) {
      res.status(400).send(error);
    }
  });

  // Get a specific soil analysis record by contact number
router.get('/soil-analysis/:contactNumber', async (req, res) => {
    const contactNumber = req.params.contactNumber;
  
    try {
      const soilAnalysis = await SoilAnalysis.findOne({ contactNumber: contactNumber });
  
      if (!soilAnalysis) {
        return res.status(404).send({ error: 'Soil analysis record not found.' });
      }
  
      res.status(200).send(soilAnalysis);
    } catch (error) {
      res.status(500).send({ error: 'Internal Server Error.' });
    }
  });

  
  


module.exports = router;

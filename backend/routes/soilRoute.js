const express = require('express');
const mongoose = require('mongoose');
const SoilAnalysis = require('./models/SoilAnalysis'); // Assuming the schema file is in the models folder
const router = express.Router();

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

// Get all soil analysis records
router.get('/soil-analysis', async (req, res) => {
  try {
    const soilAnalyses = await SoilAnalysis.find({});
    res.status(200).send(soilAnalyses);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get a specific soil analysis record by ID
router.get('/soil-analysis/:id', async (req, res) => {
  try {
    const soilAnalysis = await SoilAnalysis.findById(req.params.id);
    if (!soilAnalysis) {
      return res.status(404).send();
    }
    res.status(200).send(soilAnalysis);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a specific soil analysis record by ID
router.patch('/soil-analysis/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = [
    'farmerName', 'message', 'soilHealthOverview', 'recommendations'
  ];
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' });
  }

  try {
    const soilAnalysis = await SoilAnalysis.findById(req.params.id);

    if (!soilAnalysis) {
      return res.status(404).send();
    }

    updates.forEach((update) => soilAnalysis[update] = req.body[update]);
    await soilAnalysis.save();
    res.status(200).send(soilAnalysis);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a specific soil analysis record by ID
router.delete('/soil-analysis/:id', async (req, res) => {
  try {
    const soilAnalysis = await SoilAnalysis.findByIdAndDelete(req.params.id);

    if (!soilAnalysis) {
      return res.status(404).send();
    }

    res.status(200).send(soilAnalysis);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;

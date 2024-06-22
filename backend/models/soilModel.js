const mongoose = require('mongoose');

const SoilAnalysisSchema = new mongoose.Schema({
  farmerName: { type: String, required: true },
  contactNumber: { type: String, required: true },
  message: { type: String, required: true },
  soilHealthOverview: {
    soilPHLevel: {
      value: { type: Number, required: true },
      advice: { type: String, required: true }
    },
    nutrientLevels: {
      nitrogen: {
        level: { type: String, enum: ["Low", "Medium", "High"], required: true },
        advice: { type: String, required: true }
      },
      phosphorus: {
        level: { type: String, enum: ["Low", "Medium", "High"], required: true },
        advice: { type: String, required: true }
      },
      potassium: {
        level: { type: String, enum: ["Low", "Medium", "High"], required: true },
        advice: { type: String, required: true }
      },
      secondaryNutrients: {
        sulfur: {
          level: { type: String, enum: ["Low", "Sufficient", "High"], required: true },
          advice: { type: String, required: true }
        },
        manganese: {
          level: { type: String, enum: ["Low", "Sufficient", "High"], required: true },
          advice: { type: String, required: true }
        },
        boron: {
          level: { type: String, enum: ["Low", "Sufficient", "High"], required: true },
          advice: { type: String, required: true }
        }
      }
    }
  },
  recommendations: {
    fertilizerApplication: {
      nitrogen: { type: String, required: true },
      phosphorus: { type: String, required: true },
      potassium: { type: String, required: true }
    },
    phAdjustment: {
      limeApplication: { type: String, required: true }
    },
    irrigationSuggestions: {
      optimalMethod: { type: String, required: true },
      waterManagement: { type: String, required: true }
    },
    cropSpecificAdvice: {
      recommendedCrops: { type: String, required: true },
      cropRotation: { type: String, required: true }
    },
    organicMatterManagement: {
      compostManure: { type: String, required: true },
      coverCrops: { type: String, required: true }
    },
    pestDiseaseManagement: {
      preventiveMeasures: { type: String, required: true },
      biologicalControls: { type: String, required: true }
    },
    customizedTips: { type: String, required: true }
  }
});

const SoilAnalysis = mongoose.model('SoilAnalysis', SoilAnalysisSchema);

module.exports = SoilAnalysis;

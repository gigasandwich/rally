const voitureModel = require('../models/voitureModel');

const getVoitures = (req, res) => {
  voitureModel.getVoitures((err, voitures) => {
    if (err) {
      res.status(500).send('Error retrieving voitures');
    } else {
      res.json(voitures);
    }
  });
};

module.exports = {
  getVoitures
};

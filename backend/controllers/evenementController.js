const evenementModel = require('../models/evenementModel');

const getEvenements = (req, res) => {
  evenementModel.getEvenements((err, evenements) => {
    if (err) {
      res.status(500).send('Error retrieving evenements');
    } else {
      res.json(evenements);
    }
  });
};

module.exports = {
  getEvenements
};

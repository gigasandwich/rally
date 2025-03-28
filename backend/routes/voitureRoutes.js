const express = require('express');
const router = express.Router();
const voitureController = require('../controllers/voitureController');

router.get('/voitures', voitureController.getVoitures);

module.exports = router;
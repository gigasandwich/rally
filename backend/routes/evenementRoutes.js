const express = require('express');
const router = express.Router();
const evenement_controller = require('../controllers/evenementController');

router.get('/evenements', evenement_controller.getEvenements);

module.exports = router;
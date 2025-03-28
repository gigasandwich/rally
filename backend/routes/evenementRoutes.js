const express = require('express');
const router = express.Router();
const evenementController = require('../controllers/evenementController');

router.get('/evenements', evenementController.getEvenements);

module.exports = router;
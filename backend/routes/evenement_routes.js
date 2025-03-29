const express = require('express');
const router = express.Router();
const evenement_controller = require('../controllers/evenement_controller');

router.get('/evenements', evenement_controller.getAll);

router.get('/evenements/:id', voiture_controller.getById);

router.post('/evenements', voiture_controller.create);

router.get('/evenements/update/:id', voiture_controller.update);

router.delete('/evenements/delete/:id', voiture_controller.delete);

module.exports = router;
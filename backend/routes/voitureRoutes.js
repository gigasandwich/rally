const express = require('express');
const router = express.Router();
const voiture_controller = require('../controllers/voitureController');

router.get('/voitures', voiture_controller.getAll);

router.get('/voitures/:id', voiture_controller.getById);

router.post('/voitures', voiture_controller.create);

router.get('/voitures/update/:id', voiture_controller.update);

router.delete('/voitures/delete/:id', voiture_controller.delete);

module.exports = router;
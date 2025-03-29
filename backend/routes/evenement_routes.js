const express = require('express');
const router = express.Router();
const evenement_controller = require('../controllers/evenement_controller');

router.get('/evenements', evenement_controller.getAll);

router.get('/evenements/:id', evenement_controller.getById);

router.post('/evenements', evenement_controller.create);

router.get('/evenements/update/:id', evenement_controller.update);

router.delete('/evenements/delete/:id', evenement_controller.delete);

module.exports = router;
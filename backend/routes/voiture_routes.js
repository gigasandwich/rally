const express = require('express');
const router = express.Router();
const voiture_controller = require('../controllers/voiture_controller');

/**
 * Afaka ovain lisany ny fomba fanaovana routage hoe atao mazava (mora azo kokoa)
 * Fa ilay nanao structure an le projet fonjimaika ny nahatonga an le izy otran zao
 * otran stable ny fahitako an zao fa teneno ihany raha misy modification hitan lisany afaka atao
 */

router.get('/voitures', voiture_controller.getAll);

router.get('/voitures/:id', voiture_controller.getById);

router.post('/voitures', voiture_controller.create);

router.get('/voitures/update/:id', voiture_controller.update);

router.delete('/voitures/delete/:id', voiture_controller.delete);

module.exports = router;
const voiture_model = require('../models/voiture_model');

// Manao genre ana REST api 

const voiture_controller = {
    async getAll(req, res) {
        try {
            const voitures = await voiture_model.getAll();
            res.json(voitures);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: `Erreur lors de la recuperation des voitures a la base: ${error}` });
        }
    },

    async getById(req, res) {
        try {
            const { id } = req.params;
            const voiture = await voiture_model.getById(id);

            if (!voiture.length) {
                return res.status(404).json({ error: 'Voiture non trouvee' });
            }

            res.json(voiture[0]);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: `Erreur lors de la recuperation de la voiture: ${error}` });
        }
    },

    async create(req, res) {
        try {
            const { nom, acceleration_max, deceleration_max, reservoir, consommation_essence, vitesse_max } = req.body;
            if (!nom || !acceleration_max || !deceleration_max || !reservoir || !consommation_essence || !vitesse_max) {
                return res.status(400).json({ error: 'Champs requis manquants' });
            }

            await voiture_model.create(req.body);
            res.status(201).json({ message: 'Voiture creee avec succes' }); // 201: ressource vaovao cree
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: `Internal Server Error: ${error}` });
        }
    },

    async update(req, res) {
        try {
            const { id } = req.params;
            const updateData = req.body;

            const result = await voiture_model.update(updateData, `id = ${id}`);

            if (result.rowsAffected === 0) {
                return res.status(404).json({ error: 'Voiture non trouvee or ou aucun changement' });
            }

            res.json({ message: 'Voiture mise a jour avec succes' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: `Erreur lors de la mise a jour de la voiture: ${error}` });
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;

            const result = await voiture_model.delete(`id = ${id}`);

            if (result.rowsAffected === 0) {
                return res.status(404).json({ error: 'Voiture non trouvee' });
            }

            res.json({ message: 'Voiture suprimee avec succes' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: `Erreur lors de la suppression de la voiture: ${error}` });
        }
    }
};

module.exports = voiture_controller;
const voiture_model = require('../models/voitureModel');

// Manao genre ana REST api 

const voiture_controller = {
    async getAll(req, res) {
        try {
            const voitures = await voiture_model.getAll();
            res.json(voitures);
        } catch (error) {
            console.error('Error fetching voitures:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    async getById(req, res) {
        try {
            const { id } = req.params;
            const voiture = await voiture_model.getById(id);

            if (!voiture.length) {
                return res.status(404).json({ error: 'Voiture not found' });
            }

            res.json(voiture[0]);
        } catch (error) {
            console.error('Error fetching voiture:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    async create(req, res) {
        try {
            const { nom, acceleration_max, deceleration_max, reservoir, consommation_essence, vitesse_max } = req.body;
            if (!nom || !acceleration_max || !deceleration_max || !reservoir || !consommation_essence || !vitesse_max) {
                return res.status(400).json({ error: 'Missing required fields' });
            }

            await voiture_model.create(req.body);
            res.status(201).json({ message: 'Voiture created successfully' });
        } catch (error) {
            console.error('Error creating voiture:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    async update(req, res) {
        try {
            const { id } = req.params;
            const updateData = req.body;

            const result = await voiture_model.update(updateData, `id = ${id}`);

            if (result.rowsAffected === 0) {
                return res.status(404).json({ error: 'Voiture not found or no change applied' });
            }

            res.json({ message: 'Voiture updated successfully' });
        } catch (error) {
            console.error('Error updating voiture:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;

            const result = await voiture_model.delete(`id = ${id}`);

            if (result.rowsAffected === 0) {
                return res.status(404).json({ error: 'Voiture not found' });
            }

            res.json({ message: 'Voiture deleted successfully' });
        } catch (error) {
            console.error('Error deleting voiture:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
};

module.exports = voiture_controller;
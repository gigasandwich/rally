const evenement_model = require('../models/evenement_model');

// Manao genre ana REST api 

const evenement_controller = {
    async getAll(req, res) {
        try {
            const evenements = await evenement_model.getAll();
            res.json(evenements);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: `Erreur lors de la recuperation des evenements a la base: ${error}` });
        }
    },

    async getById(req, res) {
        try {
            const { id } = req.params;
            const evenement = await evenement_model.getById(id);

            if (!evenement.length) {
                return res.status(404).json({ error: 'evenement non trouve' });
            }

            res.json(evenement[0]);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: `Erreur lors de la recuperation de la evenement: ${error}` });
        }
    },

    async create(req, res) {
        try {
          const { id_voiture, vitesse_initiale, gamma, temps_debut } = req.body;
            if (!id_voiture || !vitesse_initiale || !gamma || !temps_debut) {
                return res.status(400).json({ error: 'Champs requis manquants' });
            }

            await evenement_model.create(req.body);
            res.status(201).json({ message: 'Evenement cree avec succes' }); // 201: ressource vaovao cree
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: `Internal Server Error: ${error}` });
        }
    },

    async update(req, res) {
        try {
            const { id } = req.params;
            const updateData = req.body;

            const result = await evenement_model.update(updateData, `id = ${id}`);

            if (result.rowsAffected === 0) {
                return res.status(404).json({ error: 'Evenement non trouve or ou aucun changement' });
            }

            res.json({ message: 'Evenement mis a jour avec succes' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: `Erreur lors de la mis a jour de la evenement: ${error}` });
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;

            const result = await evenement_model.delete(`id = ${id}`);

            if (result.rowsAffected === 0) {
                return res.status(404).json({ error: 'Evenement non trouve' });
            }

            res.json({ message: 'Evenement suprime avec succes' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: `Erreur lors de la suppression de la evenement: ${error}` });
        }
    }
};

module.exports = evenement_controller;
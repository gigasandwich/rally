const express = require('express');

const app = express();

app.use(express.json()); // Parsen le app automatique ho json ny json request tonga avy any (tsy mila miparse manuel)

const voitures = [
  { 
    id: 1, 
    nom: 'Voiture A', 
    acceleration_max: 8.5, 
    deceleration_max: 6.0, 
    reservoir: 50, 
    consommation_essence: 8.5, 
    vitesse_max: 220 
  },
  { 
    id: 2, 
    nom: 'Voiture B', 
    acceleration_max: 9.0, 
    deceleration_max: 7.0, 
    reservoir: 60, 
    consommation_essence: 9.0, 
    vitesse_max: 240 
  },
  { 
    id: 3, 
    nom: 'Voiture C', 
    acceleration_max: 7.0, 
    deceleration_max: 5.5, 
    reservoir: 45, 
    consommation_essence: 7.5, 
    vitesse_max: 200 
  }
];

const evenements = [
  { 
    id: 1, 
    id_voiture: 1, 
    vitesse_initiale: 0, 
    gamma: 2.5, 
    temps_debut: '2025-03-28T10:00:00' 
  },
  { 
    id: 2, 
    id_voiture: 2, 
    vitesse_initiale: 50, 
    gamma: -1.5, 
    temps_debut: '2025-03-28T11:00:00' 
  },
  { 
    id: 3, 
    id_voiture: 3, 
    vitesse_initiale: 20, 
    gamma: 0.0, 
    temps_debut: '2025-03-28T12:00:00' 
  }
];

app.get('/api/voitures', (req, res) => {
  res.json(voitures);
});

app.get('/api/evenements', (req, res) => {
  res.json(evenements);
});

module.exports = app;  // Exportena ho ampiasain'ny server.js
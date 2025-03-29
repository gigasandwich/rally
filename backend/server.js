require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();

// App config
app.use(cors({ origin: 'http://localhost:4321' })); // Manala resaka probleme de header
app.use(express.json()); // Parsen le app automatique ho json ny json request tonga avy any (tsy mila miparse manuel)

const voitureRoutes = require('./routes/voiture_routes');
const evenementRoutes = require('./routes/evenement_routes');

// Routes
app.use('/api', voitureRoutes);
app.use('/api', evenementRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
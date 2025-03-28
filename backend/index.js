const express = require('express');
const cors = require('cors');

const app = express();

// App config
app.use(cors({ origin: 'http://localhost:4321' })); // Manala resaka probleme de header
app.use(express.json()); // Parsen le app automatique ho json ny json request tonga avy any (tsy mila miparse manuel)

// Exportena ho ampiasain'ny server.js
module.exports = app;
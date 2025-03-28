const express = require('express');

const app = express();
app.use(express.json()); // Miparse automatique ny requests JSON

app.get('/', (req, res) => {
    res.send('Hello from backend');
});

module.exports = app;  // Exportena ilay app @zay afaka ampiasaina @ partie hafa an le application web
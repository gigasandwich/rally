require('dotenv').config(); // Amin'izay afaka mamorona variables d'environnement avy ao amle fichier
const app = require('./server');
const PORT = process.env.PORT || 5000; // Ilay port ao @ .env if exists else 5000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
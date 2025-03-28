require('dotenv').config();
const app = require('./index');

const voitureRoutes = require('./routes/voitureRoutes');
const evenementRoutes = require('./routes/evenementRoutes');
``
// Routes
app.use('/api', voitureRoutes);
app.use('/api', evenementRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
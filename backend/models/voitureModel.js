const sql = require('msnodesqlv8');

const connectionString = 'Driver={Microsoft Access Driver (*.mdb, *.accdb)};DBQ=../database/rally.accdb;';

const getVoitures = (callback) => {
  const query = 'SELECT * FROM Voiture';
  sql.query(connectionString, query, (err, rows) => {
    if (err) {
      console.error('Error fetching voitures:', err);
      callback(err, null);
    } else {
      callback(null, rows);
    }
  });
};

module.exports = {
  getVoitures
};

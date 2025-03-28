const sql = require('msnodesqlv8');
const path = require('path');

let DBQ = path.join(__dirname, '../../database/rally-2007.accdb');
const connectionString = `Driver={Microsoft Access Driver (*.mdb, *.accdb)};DBQ=${DBQ};`;

const getEvenements = (callback) => { // Callback: 1er arg: erreur/exception, 2e arg: ilay resultat attendu. Iray amreo null fona rehefa retourne
  const query = 'SELECT * FROM Evenement';
  sql.query(connectionString, query, (err, rows) => {
    if (err) {
      console.error('Error fetching evenements:', err);
      callback(err, null);
    } else {
      callback(null, rows);
    }
  });
};

module.exports = {
  getEvenements
};

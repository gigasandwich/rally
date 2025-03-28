const sql = require('msnodesqlv8');
const dsn = require('./dsn');

const connectionString = dsn.getDsn();

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

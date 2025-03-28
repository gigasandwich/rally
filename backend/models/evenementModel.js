const sql = require('msnodesqlv8');
const dsn = require('./dsn');

const connectionString = dsn.getDsn();

const getEvenements = (callback) => {
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

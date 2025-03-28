const path = require('path');

exports.getDsn = function() {
    let DBQ = path.join(__dirname, '../../database/rally-2007.accdb');
    const connectionString = `Driver={Microsoft Access Driver (*.mdb, *.accdb)};DBQ=${DBQ};`;
    return connectionString;
};
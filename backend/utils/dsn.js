const path = require('path');
const config = require('./config');

module.exports = {
    mysql: `mysql://${config.mysql.user}:${config.mysql.password}@${config.mysql.host}/${config.mysql.database}`,
    access: `Driver={Microsoft Access Driver (*.mdb, *.accdb)};DBQ=${path.join(__dirname, config.access.db_path)};`,
};
const path = require('path');
const config = require('./config');

// console.log(config);
let access_db_path = path.join(__dirname, config.access.db_path);

module.exports = {
    mysql: `mysql://${config.mysql.user}:${config.mysql.password}@${config.mysql.host}/${config.mysql.database}`,
    access: `Driver={Microsoft Access Driver (*.mdb, *.accdb)};DBQ=${access_db_path};`,
};
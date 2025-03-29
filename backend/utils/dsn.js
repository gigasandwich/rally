const path = require('path');
const config = require('./config');

let access_db_path = path.join(__dirname, config.access.db_path);
let sqlite_db_path = path.join(__dirname, config.sqlite.db_path);

module.exports = {
    mysql: `mysql://${config.mysql.user}:${config.mysql.password}@${config.mysql.host}/${config.mysql.database}`,
    sqlite: `${sqlite_db_path}`,
    access: `Driver={Microsoft Access Driver (*.mdb, *.accdb)};DBQ=${access_db_path};`,
};
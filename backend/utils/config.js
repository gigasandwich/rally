require('dotenv').config({ path: 'utils/.env' });

module.exports = {
    mysql: {
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD || '',
        database: process.env.MYSQL_DATABASE,
    },

    access: {
        db_path: process.env.ACCESS_DB_PATH,
    },
};
const db = require('../utils/db');

const table_name = 'voiture';

async function getAll() {
    return db._readAll_(table_name);
}

async function getById(id) {
    return db._read_(table_name, id);
}

async function insert(carData) {
    return db._create_(table_name, carData);
}

async function update(updateData, conditions, params) {
    return db._update_(table_name, updateData, conditions, params);
}

async function remove(conditions, params) {
    return db._delete_(table_name, conditions, params);
}

module.exports = {
    getAll,
    getById,
    insert,
    update,
    remove
};
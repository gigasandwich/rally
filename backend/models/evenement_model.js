const db = require('../utils/db');

const nom_table = 'evenement';

async function getAll() {
    return db._readAll_(nom_table);
}

async function getById(id) {
    return db._read_(nom_table, id);
}

async function insert(donnees) { // map
    return db._create_(nom_table, donnees);
}

async function update(donnees_a_jour, conditions, params) {
    return db._update_(nom_table, donnees_a_jour, conditions, params);
}

async function remove(conditions, params) {
    return db._delete_(nom_table, conditions, params);
}

module.exports = {
    getAll,
    getById,
    insert,
    update,
    remove
};
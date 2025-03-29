const db = require('../utils/db');

/**
 * Afaka asin lisany methodes hafa mitifitra base tsy olana mihitsy a
 * Ao @ db efa misy fonction _queryDatabase_(query, params = []) mireturn promise
 * Fa afaka mampiasa izay tin lisany lisany tsy olana mihitsy
 */

const nom_table = 'voiture';

async function getAll() {
    return db._readAll_(nom_table);
}

async function getById(id) {
    return db._read_(nom_table, id);
}

async function insert(carData) {
    return db._create_(nom_table, carData);
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
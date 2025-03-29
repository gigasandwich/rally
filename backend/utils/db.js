const sql = require('msnodesqlv8');
const dsn = require('./dsn');

const connection_string = dsn.getDsn();

// Nampiko _underscore_ satria misy functions efa miexiste amreo raha tsisy

function _queryDatabase_(query, parameters = []) {
    return new Promise((resolve, reject) => {
        sql.query(connection_string, query, parameters, (err, rows) => {
            if (err) {
                return reject(err);
            }
            resolve(rows);
        });
    });
}

class MissingParameterError extends Error {
    constructor(message) {
        super(message);
        this.name = "MissingParameterError";
    }
}

class InvalidDataError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidDataError";
    }
}

async function _create_(nom_table, donnee) { // map ilay donnee eto
    if (!nom_table)
        throw new MissingParameterError("Le nom de la table est requis pour l'insertion.");

    if (typeof donnee !== 'object' || Object.keys(donnee).length === 0)
        throw new InvaliddonneeError("L'objet de donnees doit etre fourni et ne peut pas etre vide pour l'insertion.");

    const colonnes = Object.keys(donnee).join(', ');
    const placeholders = Object.keys(donnee).map(() => '?').join(', ');
    const values = Object.values(donnee);

    const query = `INSERT INTO ${nom_table} (${colonnes}) VALUES (${placeholders})`;
    return _queryDatabase_(query, values);
}

async function _readAll_(nom_table, projections = ['*']) {
    if (!nom_table)
        throw new MissingParameterError("Le nom de la table est requis pour la lecture des donnees.");
    
    const projection = projections.join(', ');
    const query = `SELECT ${projection} FROM ${nom_table}`;
    return _queryDatabase_(query);
}

async function _read_(nom_table, id, projections = ['*']) {
    if (!nom_table)
        throw new MissingParameterError("Le nom de la table est requis pour la lecture des donnees.");

    if (id === undefined || id === null)
        throw new MissingParameterError("L'ID est requis pour la lecture d'un enregistrement specifique.");
    
    const projection = projections.join(', ');
    const query = `SELECT ${projection} FROM ${nom_table} WHERE id = ?`;
    return _queryDatabase_(query, [id]);
}

async function _update_(nom_table, data, conditions) {
    if (!nom_table)
        throw new MissingParameterError("Le nom de la table est requis pour la mise a jour des donnees.");

    if (typeof data !== 'object' || Object.keys(data).length === 0)
        throw new InvalidDataError("L'objet de donnees doit etre fourni et ne peut pas etre vide pour la mise a jour.");

    if (!conditions)
        throw new MissingParameterError("Les conditions sont requises pour la mise a jour des donnees.");

    const partie_set = Object.keys(data).map(key => `${key} = ?`).join(', ');
    const values = Object.values(data);

    const query = `UPDATE ${nom_table} SET ${partie_set} WHERE ${conditions}`;
    return _queryDatabase_(query, values);
}

async function _delete_(nom_table, conditions) {
    if (!nom_table)
        throw new MissingParameterError("Le nom de la table est requis pour la suppression.");

    if (!conditions)
        throw new MissingParameterError("Les conditions sont requises pour la suppression.");
    
    const query = `DELETE FROM ${nom_table} WHERE ${conditions}`;
    return _queryDatabase_(query);
}

module.exports = {
    _queryDatabase_,
    _create_,
    _readAll_,
    _read_,
    _update_,
    _delete_
};
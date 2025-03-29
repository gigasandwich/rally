const dsn = require('./dsn');

const used_dsn = dsn.sqlite || dsn.mysql || dsn.access; // Ataovy voalohany izay tian lisany ampiasaina

// Nampiko _underscore_ satria misy functions efa miexiste amreo raha tsisy

function _queryDatabase_(query, params = [], dsn = used_dsn) { // Par defaut, ilay variable used_dsn no miasa
    return new Promise((resolve, reject) => {
        let connection;

        if (dsn.startsWith('mysql://')) { // mysql
            const mysql = require('mysql2');
            connection = mysql.createConnection(dsn);
            connection.execute(query, params, (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results);
                connection.end();
            });
        } else if (dsn.startsWith('Driver={Microsoft Access Driver')) { // access
            const sql = require('msnodesqlv8');
            sql.query(dsn, query, params, (err, rows) => {
                if (err) {
                    return reject(err);
                }
                resolve(rows);
            });
        } else if (dsn.endsWith('.sqlite') || dsn.endsWith('.db')) { // sqlite
            try {
                const sqlite3 = require('better-sqlite3');
                connection = new sqlite3(dsn);
                const stmt = connection.prepare(query);
                const rows = stmt.all(...params);
                resolve(rows);
                connection.close();
            } catch (error) {
                reject(error);
            }
        } else {
            return reject(new Error('DSN non supporte'));
        } 
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

async function _create_(nom_table, donnees) { // map ilay donnees eto
    if (!nom_table)
        throw new MissingParameterError("Le nom de la table est requis pour l'insertion.");

    if (typeof donnees !== 'object' || Object.keys(donnees).length === 0)
        throw new InvalidDataError("L'objet de donnees doit etre fourni et ne peut pas etre vide pour l'insertion.");

    const colonnes = Object.keys(donnees).join(', ');
    const placeholders = Object.keys(donnees).map(() => '?').join(', ');
    const values = Object.values(donnees);

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

async function _update_(nom_table, donnees, conditions) {
    if (!nom_table)
        throw new MissingParameterError("Le nom de la table est requis pour la mise a jour des donnees.");

    if (typeof donnees !== 'object' || Object.keys(donnees).length === 0)
        throw new InvalidDataError("L'objet de donnees doit etre fourni et ne peut pas etre vide pour la mise a jour.");

    if (!conditions)
        throw new MissingParameterError("Les conditions sont requises pour la mise a jour des donnees.");

    const partie_set = Object.keys(donnees).map(key => `${key} = ?`).join(', ');
    const values = Object.values(donnees);

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
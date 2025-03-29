const sql = require('msnodesqlv8');
const dsn = require('./dsn');
const path = require('path');

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

async function _create_(table_name, data) { // map ilay data eto
    if (!table_name)
        throw new MissingParameterError("Table name is required for insertion.");

    if (typeof data !== 'object' || Object.keys(data).length === 0)
        throw new InvalidDataError("Data object must be provided and cannot be empty for insertion.");

    const columns = Object.keys(data).join(', ');
    const placeholders = Object.keys(data).map(() => '?').join(', ');
    const values = Object.values(data);

    const query = `INSERT INTO ${table_name} (${columns}) VALUES (${placeholders})`;
    return _queryDatabase_(query, values);
}

async function _readAll_(table_name, projections = ['*']) {
    if (!table_name)
        throw new MissingParameterError("Table name is required for reading data.");
    
    const projection = projections.join(', ');
    const query = `SELECT ${projection} FROM ${table_name}`;
    return _queryDatabase_(query);
}

async function _read_(table_name, id, projections = ['*']) {
    if (!table_name)
        throw new MissingParameterError("Table name is required for reading data.");

    if (id === undefined)
        throw new MissingParameterError("ID is required for reading a specific record.");
    
    const projection = projections.join(', ');
    const query = `SELECT ${projection} FROM ${table_name} WHERE id = ?`;
    return _queryDatabase_(query, [id]);
}

async function _update_(table_name, data, conditions) {
    if (!table_name)
        throw new MissingParameterError("Table name is required for updating data.");

    if (typeof data !== 'object' || Object.keys(data).length === 0)
        throw new InvalidDataError("Data object must be provided and cannot be empty for updating.");

    if (!conditions)
        throw new MissingParameterError("Conditions are required for updating data.");

    const set_clause = Object.keys(data).map(key => `${key} = ?`).join(', ');
    const values = Object.values(data);

    const query = `UPDATE ${table_name} SET ${set_clause} WHERE ${conditions}`;
    return _queryDatabase_(query, values);
}

async function _delete_(table_name, conditions) {
    if (!table_name)
        throw new MissingParameterError("Table name is required for deletion.");

    if (!conditions)
        throw new MissingParameterError("Conditions are required for deletion.");
    
    const query = `DELETE FROM ${table_name} WHERE ${conditions}`;
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
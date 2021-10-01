const JsonDB = require('node-json-db').JsonDB;
const Config = require('node-json-db/dist/lib/JsonDBConfig').Config;

module.exports = new JsonDB(new Config('./db/dogsList', true, true, '/'));

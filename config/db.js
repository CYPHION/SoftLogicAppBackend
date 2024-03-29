const { Sequelize } = require('sequelize');
const { dbName, dbUser, dbPassword, dbHost, dialect } = require('./config');

// Define your database connection details
const db = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect, // (e.g., postgres, sqlite)
    logging: false, // Set to true to log SQL queries (useful for debugging)
});


module.exports = db;

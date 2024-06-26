const mysql = require('mysql2/promise');
require('dotenv').config();

const HOST = process.env.DB_HOST;
const USER = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD;
const DATABASE = process.env.DB_DATABASE;

async function iniciarDB(){
    const connection = mysql.createPool({
        host: HOST,
        user: USER,
        password: PASSWORD,
        database: DATABASE
    });
    console.log("Conexión establecida en la base de datos")
    return connection;
};

module.exports = iniciarDB;
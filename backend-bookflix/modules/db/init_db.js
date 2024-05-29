const mysql = require('mysql2/promise');
require('dotenv').config();

const HOST = process.env.MYSQL_ADDON_HOST
const USER = process.env.MYSQL_ADDON_USER
const PASSWORD = process.env.MYSQL_ADDON_PASSWORD
const DATABASE = process.env.MYSQL_ADDON_DB

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
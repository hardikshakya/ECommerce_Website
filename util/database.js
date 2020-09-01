const mysql = require("mysql2");

const pool = mysql.createPool({
    host: process.env.DEV_DB_HOST,
    user: process.env.DEV_DB_USER_NAME,
    database: process.env.DEV_DB_DATABASE,
    password: process.env.DEV_DB_PASSWORD,
});

module.exports = pool.promise();

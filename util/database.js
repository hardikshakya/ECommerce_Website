const Sequelize = require("sequelize");

const sequelize = new Sequelize(
    process.env.DEV_DB_DATABASE,
    process.env.DEV_DB_USER_NAME,
    process.env.DEV_DB_PASSWORD,
    {
        dialect: "mysql",
        host: process.env.DEV_DB_HOST,
    }
);

module.exports = sequelize;

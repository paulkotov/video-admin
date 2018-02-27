const Sequelize = require('sequelize');
const config = require('../config/config');

const sequelize = new Sequelize(config.development.config.database, 
    config.development.config.username, 
    config.development.config.password, {
        host: 'localhost',
        dialect: 'mysql'
    });


module.exports = sequelize;
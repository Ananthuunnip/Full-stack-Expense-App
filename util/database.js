
const Sequelize = require('sequelize');

const sequelize = new Sequelize('expence', 'root', 'ROOT', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;

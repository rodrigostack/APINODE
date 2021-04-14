const Sequelize = require('sequelize');

const connection = new Sequelize('dadosclientes', 'root','',{
    host: 'localhost',
    dialect: 'mysql'

});

module.exports = connection;
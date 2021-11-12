const sequelize = require('sequelize');

const connection = new sequelize('guia_perguntas', 'root', '@gamerboy10Mf', {
	host: 'localhost',
	dialect: 'mysql'
});

module.exports = connection;
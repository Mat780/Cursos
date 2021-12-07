const Sequelize = require('sequelize');
const connection = require('./connection');

// Tabela
const Pergunta = connection.define('pergunta',{
	// Colunas da tabela
	titulo: {
		type: Sequelize.STRING,
		allowNull: false
	},
	descrição: {
		type: Sequelize.TEXT,
		allowNull: false
	}
});

// Sincroniza com o banco de dados sem forçar a criar uma nova se já existir
Pergunta.sync({force: false}).then(() => {});

module.exports = Pergunta;
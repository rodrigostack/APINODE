const Sequelize = require('sequelize');
const connection = require('./conexao');
const conncetion = require('./conexao');

const Mensagem = connection.define('mensagem',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey: true,
        allowNull: false
    },
    nome:{
        type:Sequelize.STRING,
        allowNull:false
    },

    email:{
        type:Sequelize.STRING,
        allowNull:false
    },

    descricao:{
        type:Sequelize.TEXT,
        allowNull:false
    }

});

Mensagem.sync({force: false}).then(() =>{});


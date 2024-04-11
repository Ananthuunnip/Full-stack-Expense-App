const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const User = sequelize.define('expences',{
    id:{
        type :Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    amound:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    discription:{
        type:Sequelize.STRING,
        allowNull:false
    },
    category:{
        type:Sequelize.STRING,
        allowNull:false
    }
})
module.exports = User;
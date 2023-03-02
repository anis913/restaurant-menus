const {sequelize} = require('../db');
const { Sequelize } = require('sequelize');

const Item = sequelize.define("item", {
    name: Sequelize.STRING,
    image: Sequelize.STRING,
    price: Sequelize.FLOAT,
    vegetarian: Sequelize.BOOLEAN
})

await sequelize.sync();

module.exports = {Item};
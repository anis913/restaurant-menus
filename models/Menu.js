const {sequelize} = require('../db');
const { Sequelize } = require('sequelize');

const Menu = sequelize.define("menu", {
    title: Sequelize.STRING
})

await sequelize.sync();

module.exports = {Menu};
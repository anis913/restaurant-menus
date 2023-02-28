const {sequelize} = require('../db');
const { Sequelize } = require('sequelize');

const Restaurant = sequelize.define("restaurant", {
    name: Sequelize.STRING,
    location: Sequelize.STRING,
    cuisine: Sequelize.STRING

})

await sequelize.sync();

module.exports = {Restaurant};
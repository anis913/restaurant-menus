const {Restaurant} = require('./Restaurant')
const {Menu} = require('./Menu')
const {Item} = require('./Item')


Menu.belongsTo(Restaurant);
Restaurant.hasMany(Menu);

Item.belongsToMany(Menu, {through: "item_menu"});
Menu.belongsToMany(Item, {through: "item_menu"});

module.exports = { Restaurant, Menu, Item }

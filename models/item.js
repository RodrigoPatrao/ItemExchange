'use strict';
module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define('Item', {
    itemType: DataTypes.STRING,
    itemName: DataTypes.STRING,
    quantity: DataTypes.STRING,
    price: DataTypes.STRING,
    operation: DataTypes.STRING
  });
  return Item;
};

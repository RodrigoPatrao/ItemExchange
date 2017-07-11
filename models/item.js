'use strict';
module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define('Item', {
    itemType: DataTypes.STRING,
    itemName: DataTypes.STRING,
    quantity: DataTypes.BIGINT,
    price: DataTypes.BIGINT
  }, {
    classMethods: {
      associate: function(models) {
        Item.belongsToMany(models.Operation, {through: 'OperationItem'});
      }
    }
  });
  return Item;
};

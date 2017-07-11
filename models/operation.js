'use strict';
module.exports = function(sequelize, DataTypes) {
  var Operation = sequelize.define('Operation', {
    operationType: DataTypes.STRING
  }, {
    classMethods: {
      associate: models => {
        Operation.belongsToMany(models.Item, {through: 'OperationItem'});
      }
    }
  });
  return Operation;
};

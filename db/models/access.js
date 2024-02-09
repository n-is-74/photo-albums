const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Access extends Model {
    static associate(models) {
    }
  }
  Access.init(
    {
      user_id: DataTypes.INTEGER,
      album_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Access',
    },
  );
  return Access;
};

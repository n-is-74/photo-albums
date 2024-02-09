const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    static associate(models) {
      // define association here
    }
  }
  Photo.init(
    {
      img: DataTypes.STRING,
      title: DataTypes.STRING,
      album_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Photo',
    },
  );
  return Photo;
};

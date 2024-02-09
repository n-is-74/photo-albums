const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Album extends Model {
    static associate({ User, Photo }) {
      this.belongsTo(User, { foreignKey: 'author_id' });
      this.hasMany(Photo, { foreignKey: 'album_id' });
      this.belongsToMany(User, { through: 'Accesses', foreignKey: 'album_id' });
    }
  }
  Album.init(
    {
      a_name: DataTypes.STRING,
      author_id: DataTypes.INTEGER,
      private: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Album',
    },
  );
  return Album;
};

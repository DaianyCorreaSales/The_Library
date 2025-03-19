module.exports = (sequelize, Sequelize) => {
  const Genre = sequelize.define('Genre', {
      name: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false
      }
  },{
      timestamps: false,
      tableName: 'genres'
  });

  Genre.associate = function(models) {
      Genre.hasMany(models.Book, { foreignKey: 'genreId' });
  };

  return Genre;
};

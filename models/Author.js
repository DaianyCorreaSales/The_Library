module.exports = (sequelize, Sequelize) => {
  const Author = sequelize.define('Author', {
      name: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false
      }
  },{
      timestamps: false,
      tableName: 'authors'
  });

  Author.associate = function(models) {
      Author.hasMany(models.Book, { foreignKey: 'authorId' });
  };

  return Author;
};

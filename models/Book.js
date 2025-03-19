module.exports = (sequelize, Sequelize) => {
  const Book = sequelize.define('Book', {
      title: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false
      },
      description: {
          type: Sequelize.DataTypes.TEXT,
          allowNull: true
      },
      publisher: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false
      },
      year: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false
      },
      borrowed: {
          type: Sequelize.DataTypes.BOOLEAN,
          defaultValue: false
      }
  },{
      timestamps: false,
      tableName: 'books'
  });

  Book.associate = function(models) {
      Book.belongsTo(models.Author, { foreignKey: 'authorId' });

      Book.belongsTo(models.Genre, { foreignKey: 'genreId' });

      Book.belongsToMany(models.Language, { through: models.BookLanguage, foreignKey: 'bookId' });

      Book.belongsToMany(models.User, { through: models.Borrow, foreignKey: 'bookId' });
  };

  return Book;
};

module.exports = (sequelize, Sequelize) => {
  const Language = sequelize.define('Language', {
      name: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false
      }
  },{
      timestamps: false,
      tableName: 'languages'
  });

  Language.associate = function(models) {
      Language.belongsToMany(models.Book, { through: models.BookLanguage, foreignKey: 'languageId' });
  };

  return Language;
};

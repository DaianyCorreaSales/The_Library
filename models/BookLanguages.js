module.exports = (sequelize, Sequelize) => {
  const BookLanguages = sequelize.define('BookLanguages', {}, {
      timestamps: false,
      tableName: 'bookLanguages'
  });

  return BookLanguages;
};

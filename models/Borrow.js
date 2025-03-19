module.exports = (sequelize, Sequelize) => {
  const Borrow = sequelize.define('Borrow', {
      borrowDate: {
          type: Sequelize.DataTypes.DATE,
          defaultValue: Sequelize.NOW
      },
      returnDate: {
          type: Sequelize.DataTypes.DATE,
          allowNull: true
      }
  },{
      timestamps: false,
      tableName: 'borrows'

  });

  return Borrow;
};

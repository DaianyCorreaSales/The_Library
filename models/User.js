module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('User', {
      fullName: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false
      },
      username: {
          type: Sequelize.DataTypes.STRING,
          unique: true,
          allowNull: false
      },
      password: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false
      },
      role: {
          type: Sequelize.DataTypes.ENUM('admin', 'member'),
          allowNull: false
      }
  },{
      timestamps: false,
      tableName: 'users'
  });

  User.associate = function(models) {
      User.belongsToMany(models.Book, { through: models.Borrow, foreignKey: 'userId' });
  };

  return User;
};

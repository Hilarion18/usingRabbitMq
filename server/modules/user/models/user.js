const Sequelize = require('sequelize');
const connection = require('../../../util/database').connection1;

const User = connection.define('User', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  picture: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  }
}, {
    timestamps: false,
    tableName: 'user_profile',
  });

module.exports = User;
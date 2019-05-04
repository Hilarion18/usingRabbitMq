const Sequelize = require('sequelize');
const connection = require('../../../util/database').connection1;

const Merchant = connection.define(
  'Merchant',
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    full_name: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    tenant_profile_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    phone_number: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    email: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    role_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    is_active: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    gender: {
      type: Sequelize.STRING(1),
      allowNull: false
    },
    on_off_order: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    },
    picture_profile: {
      type: Sequelize.STRING(100),
      allowNull: false
    }
  },
  {
    timestamps: false,
    tableName: 'customer_profile',
  }
);

module.exports = Merchant;

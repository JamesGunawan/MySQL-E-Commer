const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const Customer = sequelize.define('Customer', {
  customer_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  first_name: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(50),
    unique: true,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING(15),
  },
  address: {
    type: DataTypes.STRING(40),
  },
  city: {
    type: DataTypes.STRING(20),
  },
  state: {
    type: DataTypes.STRING(20),
  },
  zip: {
    type: DataTypes.INTEGER,
  },
  regis_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'customers',
  timestamps: false,
});

module.exports = Customer;
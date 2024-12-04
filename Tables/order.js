// Creates the orders table using a sequelize syntax in javascript
const { DataTypes } = require('sequelize');
const sequelize = require('../config');
const Customer = require('./customer');

const Order = sequelize.define('Order', {
  order_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  customer_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Customer,
      key: 'customer_id',
    },
  },
  order_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  order_status: {
    type: DataTypes.ENUM('Pending', 'Shipped', 'Delivered', 'Cancelled'),
    defaultValue: 'Pending',
  },
  total_amount: {
    type: DataTypes.DECIMAL(10, 2),
  },
}, {
  tableName: 'orders',
  timestamps: false,
});

module.exports = Order;
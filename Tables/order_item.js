const { DataTypes } = require('sequelize');
const sequelize = require('../config');
const Order = require('./order');
const Product = require('./product');

const OrderItem = sequelize.define('OrderItem', {
  order_detail_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  order_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Order,
      key: 'order_id',
    },
  },
  product_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Product,
      key: 'product_id',
    },
  },
  quantity: {
    type: DataTypes.INTEGER,
  },
  price_per_product: {
    type: DataTypes.DECIMAL(10, 2),
  },
}, {
  tableName: 'order_items',
  timestamps: false,
});

module.exports = OrderItem;
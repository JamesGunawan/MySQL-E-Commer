const sequelize = require('./config');
const Customer = require('./Tables/customer');
const Product = require('./Tables/product');
const Order = require('./Tables/order');
const OrderItem = require('./Tables/order_item');

(async () => {
  try {
    // Sync all models with the database
    await sequelize.sync({ force: true }); // Use { force: true } to drop existing tables and create new ones
    console.log('All tables have been created successfully.');
  } catch (error) {
    console.error('Error creating tables:', error.message);
  } finally {
    await sequelize.close(); // Close the connection after the operation
  }
})();
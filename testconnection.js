// Required configs to run
const sequelize = require('./config.js');

(async () => {
  try {
    // Test the connection
    await sequelize.authenticate();
    console.log('Database connection established successfully.');

    // Show tables if there are any
    const [results] = await sequelize.query("SHOW TABLES");
    console.log("Tables in the database:", results);
  } catch (error) {
    console.error("Error fetching tables:", error.message);
  }
})();
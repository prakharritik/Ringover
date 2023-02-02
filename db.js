const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("ringer", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log("Connection to database has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

module.exports = { connectDB, sequelize };
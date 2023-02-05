require("dotenv").config();
const { Sequelize } = require("sequelize");
console.log(process.env.dbname, process.env.dbuser, process.env.dbpass);
const sequelize = new Sequelize(
  process.env.dbname,
  process.env.dbuser,
  process.env.dbpass,
  {
    host: process.env.dbhost,
    dialect: "mysql",
  }
);

async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log("Connection to database has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

module.exports = { connectDB, sequelize };

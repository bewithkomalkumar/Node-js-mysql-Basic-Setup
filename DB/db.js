const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("icmr", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;

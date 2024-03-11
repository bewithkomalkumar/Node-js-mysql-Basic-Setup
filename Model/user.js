const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../DB/db");

const userSchema = {
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

const User = sequelize.define("User", userSchema, {
  timestamps: true,
});
User.sync()
  .then(() => {
    console.log("User model synchronized with database schema.");
  })
  .catch((err) => {
    console.error("Error synchronizing User model:", err);
  });
module.exports = User;

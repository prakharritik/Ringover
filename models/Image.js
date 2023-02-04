const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../db.js");

const Image = sequelize.define(
  "images",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    url: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    shoe_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "shoes",
        key: "id",
      },
    },
  },
  {
    sequelize,
    tableName: "images",
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "id" }],
      },
      {
        name: "shoe_id",
        using: "BTREE",
        fields: [{ name: "shoe_id" }],
      },
    ],
  }
);

module.exports = Image;

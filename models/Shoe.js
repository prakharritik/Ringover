const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../db.js");

const Shoe = sequelize.define(
  "Shoe",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    n_templates: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "type",
        key: "id",
      },
    },
  },
  {
    sequelize,
    tableName: "shoes",
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "id" }],
      },
      {
        name: "type",
        using: "BTREE",
        fields: [{ name: "type" }],
      },
    ],
  }
);

module.exports = Shoe;

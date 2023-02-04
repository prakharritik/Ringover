var DataTypes = require("sequelize").DataTypes;
const Image = require("./Image");
const Shoe = require("./Shoe");
const Type = require("./Type");

function initModels(sequelize) {
  Image.belongsTo(Shoe, { as: "shoe", foreignKey: "shoe_id" });
  Shoe.hasMany(Image, { as: "images", foreignKey: "shoe_id" });
  Type.hasMany(Shoe, { as: "shoes", foreignKey: "type" });

  return {
    Image,
    Shoe,
    Type,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;

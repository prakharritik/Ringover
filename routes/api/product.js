const express = require("express");
const { Op } = require("sequelize");
const { Image, Shoe, Type } = require("../../models/associations").initModels();

const router = express.Router();

/**
 * GET at "/api/product"
 * Get all products
 */

const filters = {
  cost: [{ gte: 1500, lte: 4000 }, { gte: 4001, lte: 7000 }, { gte: 7001 }],
  type: [1, 2], //"Loafers"->1, "Sneakers"->2
  design: [{ gte: 2, lte: 2 }, { gte: 3, lte: 3 }, { gte: 4 }],
};

router.get("/", async (req, res) => {
  const filter = req.query;
  console.log(filter);
  let price = [],
    type = [],
    design = [];

  try {
    for (let index = 0; index < filter["cost"].length; index++) {
      const element = filter["cost"][index];
      if (element === "true") {
        let ele = filters["cost"][index];
        if (ele.lte) {
          price.push({
            [Op.between]: [ele.gte, ele.lte],
          });
        } else {
          price.push({
            [Op.gte]: [ele.gte],
          });
        }
      }
    }

    for (let index = 0; index < filter["type"].length; index++) {
      const element = filter["type"][index];
      if (element === "true") {
        let ele = filters["type"][index];

        type.push({
          [Op.eq]: [ele],
        });
      }
    }

    for (let index = 0; index < filter["design"].length; index++) {
      const element = filter["design"][index];
      if (element === "true") {
        let ele = filters["design"][index];
        if (ele.lte) {
          design.push({
            [Op.between]: [ele.gte, ele.lte],
          });
        } else {
          design.push({
            [Op.gte]: [ele.gte],
          });
        }
      }
    }

    const shoes = await Shoe.findAll({
      include: {
        model: Image,
        as: "images",
        attributes: ["url", "id"],
      },
      where: {
        [Op.and]: [
          {
            price: {
              [Op.or]: price,
            },
          },
          {
            n_templates: {
              [Op.or]: design,
            },
          },
          {
            type: {
              [Op.or]: type,
            },
          },
        ],
      },
    });
    res.json(shoes);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

/**
 * GET at "/api/product/:id"
 * Get product with given id
 */

router.get("/:id", async (req, res) => {
  try {
    const shoe = await Shoe.findByPk(req.params.id, {
      include: {
        model: Image,
        as: "images",
        attributes: ["url", "id"],
      },
    });

    if (!shoe) {
      return res.status(400).json({ msg: "Product not found" });
    }

    res.json(shoe);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Product not found" });
    }
    res.status(500).send("Server Error");
  }
});

module.exports = router;

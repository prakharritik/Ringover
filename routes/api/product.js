const express = require("express");
const Shoe = require("../../models/Shoe");
const router = express.Router();

/**
 * GET at "/api/product"
 * Get all products
 */

router.get("/", async (req, res) => {
  try {
    const shoes = await Shoe.findAll();
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
    const shoe = await Shoe.findByPk(req.params.id);

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

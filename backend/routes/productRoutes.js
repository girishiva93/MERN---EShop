import express from "express";
import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";
const router = express.Router();

// first ko linke le sabai data dakhai rakheko xa

// @desc Fetch all products
// @route GET /api/products
// @access Public

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const product = await Product.find({});
    res.json(product);
  })
);

// second ko link le selected id matra dakhai rakheko xa

// @desc Fetch single product
// @route GET /api/products/:id
// @access Public
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
  })
);

export default router;

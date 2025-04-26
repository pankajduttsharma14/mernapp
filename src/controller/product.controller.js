const { Product } = require("../models/products-models");
const ProductService = require("../services/product.service");

const AddProduct = async (req, res, next) => {
  try {
    let res = await ProductService.addProduct(...req.body);
    next(res);
  } catch (error) {
    next(error);
  }
};

module.exports = { AddProduct };

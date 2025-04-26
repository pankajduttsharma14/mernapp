const express = require("express");
const { AddProduct } = require("../controller/product.controller");

const privateRouter = express.Router();

privateRouter.post("/", AddProduct);

module.exports = { privateRouter };

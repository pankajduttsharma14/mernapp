const { Product } = require("../models/products-models");

class ProductService {
  static async addProduct(name, discription, image) {
    return await Product.create({ name, discription, image });
  }
}

module.exports = ProductService;

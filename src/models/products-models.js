const { default: mongoose, Types } = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    discription: {
      type: String,
    },
    image: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

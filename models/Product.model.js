const { model, Schema } = require("mongoose");

const productSchema = new Schema(
  {
    name: String,
    quantity: Number,
    price: Number,
    color: String,
  },
  {
    timestamps: true,
  }
);

const Product = model("Product", productSchema);
module.exports = Product;

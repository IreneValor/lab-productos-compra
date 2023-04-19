const mongoose = require("mongoose");
require("dotenv").config();
const products = require("./products");
const Product = require("../models/Product.model");

mongoose
  .connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log("Connected to DB!");
    await Product.deleteMany();
    await Product.insertMany(products);
  })
  .then(() => {
    mongoose.disconnect();
    console.log("Disconnected from DB!");
  });

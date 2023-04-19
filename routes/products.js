const express = require("express");
const Product = require("../models/Product.model");
const router = express.Router();

router.get("/", async (req, res, next) => {
  const products = await Product.find(); ///???
  res.render("products/list", { products });
});

router.get("/create", async (req, res, next) => {
  res.render("products/create-form");
});

router.get("/:id", async (req, res, next) => {
  // const id = req.params.id es otra opción
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render("products/detail", { product });

  // Product.findById(id)
  // .then(product => {
  //   res.render('products/detail', { product })
  // }) // la opción con THEN
});

router.post("/create", async (req, res, next) => {
  console.log(req.body);
  await Product.create(req.body);
  res.redirect("/products");
});

router.get("/:id/edit", async (req, res, next) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render("products/update-form", { product });
});

router.post("/:id/edit", async (req, res, next) => {
  await Product.findByIdAndUpdate(id, req.body);
  res.redirect("/products");
});

router.post("/:id/delete", async (req, res, next) => {
  await Product.findByIdAndDelete(req.params.id);
  res.redirect("/products");
});

module.exports = router;

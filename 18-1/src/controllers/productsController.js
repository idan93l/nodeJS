// const express = require("express");
const Product = require("../models/Product");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (e) {
    res.status(400).send({ Error: e.message });
  }
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(400).send(product);
    }
    res.send(product);
  } catch (e) {
    res.status(500).send({ Error: e.message });
  }
};

const createProduct = async (req, res) => {
  try {
    // const { product } = req.body;
    const newProduct = await Product.create(req.body);
    res.status(200).send(newProduct);
  } catch (e) {
    res.status(400).send({ Error: e.message });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { isActive, discount } = req.body;
  // const { isActive } = req.body;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { isActive: isActive, details: { discount: discount } },
      // { isActive: isActive },
      { new: true }
      // { new: true, runValidators:true }
    );
    if (!updatedProduct) {
      return res.status(400).send(updatedProduct);
    }
    res.send(updatedProduct);
  } catch (e) {
    res.status(500).send({ Error: e.message });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).send();
    }
    res.send(product);
  } catch (e) {
    res.status(500).res.send({ Error: e.message });
  }
};

const deleteAllProducts = async (req, res) => {
  try {
    const products = await products.deleteMany({});
    if (!products) {
      return res.status(404).send();
    }
    res.send(products);
  } catch (err) {
    res.status(500).res.send();
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  deleteAllProducts,
};

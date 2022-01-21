const express = require("express")
const { getProducts, createProduct, updateProduct, deleteProduct, getProduct, deleteAllProducts } = require("../controllers/productsController.js")
const productRouter = express.Router()

productRouter.get("/", getProducts);
productRouter.get("/:id", getProduct);
productRouter.put('/:id',updateProduct);
productRouter.post('/',createProduct);
productRouter.delete('/',deleteAllProducts);
productRouter.delete('/:id',deleteProduct);

module.exports = productRouter;
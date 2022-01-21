const express = require("express");
require('./db/mongoose');
// const Product = require("./models/Product");
const productRouter = require('./routes/productRouter.js');

const app = express();
const port = 9000;

app.use(express.json());
app.use('/products',productRouter)

// app.post("/products", async (req, res) => {
//     try {
//       const product = await Product.create(req.body)
//       res.status(200).send(product);
//       console.log(product);
//     } catch (e) {
//       res.status(400).send(e);
//       console.log(e.message);
//     }
// });

app.listen(port, () => {
  console.log(`server is on port ${port}`);
});

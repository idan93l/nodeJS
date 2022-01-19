const mongoose = require("mongoose");
// const { db } = require("./Product.js");
const Product = require("./Product.js");

mongoose.connect(
  "mongodb://127.0.0.1:27017/e-commerce-site",
  // { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  () => {
    console.log("connected");
    // db.stop();
  },
  (e) => console.error(e)
);

run();

async function run() {
  try {
    const product = await Product.create({
      name: "taylor baby jr",
      category: "acoustic",
      isActive: true,
      details: {
        description: "the best acoustic guitar for your next travel",
        price: 3000,
        discount: 15,
        images: ["image5", "image6"],
        phone: "0508395719",
      },
    });
    console.log(product);
  } catch (e) {
    console.log(e.message);
  }
}

const mongoose = require("mongoose");
const Product = require("./Product.js");

mongoose.connect()

mongoose.connect(
  "mongodb://127.0.0.1:27017/e-commerce-site",
  // { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  () => {
    console.log("connected");
  },
  (e) => console.error(e)
);


async function run() {
  try {
    const product = await Product.create({
      name: "musicman stingray",
      category: "bass",
      isActive: true,
      details: {
        description: "musicman classic",
        price: 9500,
        discount: 10,
        images: ["image1", "image2"],
        phone: "0582985326",
      },
    });
    console.log(product);
  } catch (e) {
    console.log(e.message);
  }
}

run();
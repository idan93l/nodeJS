const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://127.0.0.1:27017/shop-with-routes",
  () => {
    console.log("connected");
  },
  (e) => console.error(e)
);

// {
//   "name": "akai mpk mini",
//   "category": "midi keyboard",
//   "isActive": true,
//   "details": {
//       "description": "best portable midi keyboard by akai",
//       "price": 500,
//       "discount": 10,
//       "images": ["image1", "image2"],
//       "phone": "0582858391"
//   }
// }

// run();

// async function run() {
//   try {
//     const product = await Product.create({
//       name: "taylor baby jr",
//       category: "acoustic",
//       isActive: true,
//       details: {
//         description: "the best acoustic guitar for your next travel",
//         price: 3000,
//         discount: 15,
//         images: ["image5", "image6"],
//         phone: "0508395719",
//       },
//     });
//     console.log(product);
//   } catch (e) {
//     console.log(e.message);
//   }
// }

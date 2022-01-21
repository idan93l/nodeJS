const mongoose = require("mongoose");
const arrayValidator = require('mongoose-array-validator');
const validator = require("validator");

const detailsSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    minlength: 10,
  },

  price: {
    type: Number,
    required: true,
    min: 1,
  },

  discount: {
    type: Number,
    required: false,
    default: 0,
  },

  images: {
    type: [String],
    minItems: 2,
  },

  phone: {
    type: String,
    required: true,
    validate: {
      validator: (value) => validator.isMobilePhone(value, "he-IL"),
      message: "invalid phone number",
    },
  },

  dateAdded: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
});

detailsSchema.plugin(arrayValidator);

const productScheme = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },

  category: {
    type: String,
    required: true,
  },

  isActive: Boolean,

  details: detailsSchema,
});

module.exports = mongoose.model("Product", productScheme);
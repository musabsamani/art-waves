const users = require("../data/db/users");
const categories = require("../data/db/categories");
const products = require("../data/db/products");
const User = require("../models/User");
// const Category = require("../models/Category");
const Product = require("../models/productModel");
const mongoose = require("mongoose");

const loadSampleData = async () => {

  // Drop the database
  await mongoose.connection.db.dropDatabase();

  console.log(`loading sample data`);
  // Insert sample data
  await User.insertMany(users);
  // await Category.insertMany(categories);
  await Product.insertMany(products);


};

module.exports = loadSampleData;

const express = require("express");
const path = require("path");

const axios = require("axios");

const morgan = require("morgan");

const app = express();

// middleware
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());
app.use(morgan("dev"));

//===helper functions===//

//Overview

const { Product } = require("../Database/db.js");


const getProducts = function () {
  return Product.find();
};

// const getProducts = function() {
//   return Product.find();
// }

//===api requests===//
//Overview
// app.get("/productDetails", function (req, res) {
//   getProducts()
//     .then((data) => {
//       console.log(data);
//       res.send(data);
//     })
//     .catch((err) => {
//       console.log("Product GET error!", err);
//       res.status(500).send(err);
//     });
// });

// review routes

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
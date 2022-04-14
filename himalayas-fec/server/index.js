const express = require("express");
const path = require("path");
const axios = require("axios");
const compression = require('compression');

const app = express();

app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());
app.use(compression())

const getProducts = function () {
  return Product.find();
};

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
const express = require("express");
const path = require("path");
const axios = require("axios");

const app = express();

app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());



//===helper functions===//

//Overview
const { Product } = require('../Database/db.js');

const getProducts = function() {
  return Product.find();
}


//===api requests===//
//Overview
app.get('/productDetails', function(req, res) {
  getProducts()
  .then(data => {
    console.log(data);
    res.send(data);
  })
  .catch(err => {
    console.log('Product GET error!', err);
    res.status(500).send(err);
  })
})




app.listen(3001)
console.log('listening at http://localhost:3001');
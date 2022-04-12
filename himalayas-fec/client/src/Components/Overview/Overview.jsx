import React, { useState } from 'react';
import { render } from "react-dom";
import axios from 'axios';
import StyleGallery from './StyleGallery.jsx';
import ProductInformation from './ProductInformation.jsx';
import StyleSelector from './StyleSelector.jsx';
import Cart from './Cart.jsx';
import {productQ} from '../../App.jsx';
import { productResponse, categoryResponse, productStyles, stylesResponse,
  selectedProductId, currentProductSelector, currentStylesSelector } from '../../lib/Atoms.jsx';
import { selectedProduct } from '../../lib/searchAPI.js';
import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';





 const Overview = (props) => {
 //acquire current product
  const productsArray = useRecoilValue(currentProductSelector);

  var currentId = props.productId;

  var currentProduct;

  productsArray.forEach(product => {

    var stringVersion = JSON.stringify(product.id);

    if (stringVersion === props.productId) {
      currentProduct = product;
    }
  })

 //acquire styles related to current product
   const stylesArray = useRecoilValue(currentStylesSelector);

  return (
    <div className="overview">
      <ProductInformation currentProduct={currentProduct} />
      <StyleSelector styles={stylesArray} />
      <Cart />
    </div>

  )
};



export default Overview;
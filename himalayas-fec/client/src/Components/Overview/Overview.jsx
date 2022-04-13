import React, { useState } from 'react';
import { render } from "react-dom";
import axios from 'axios';
import StyleGallery from './StyleGallery.jsx';
import ProductInformation from './ProductInformation.jsx';
import StyleSelector from './StyleSelector.jsx';
import Cart from './Cart.jsx';
import { productResponse, categoryResponse, productStyles, stylesResponse,
  selectedProductId, currentProductSelector, currentStylesSelector, productQ } from '../../lib/Atoms.jsx';
import { selectedProduct } from '../../lib/searchAPI.js';
import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';





 const Overview = (props) => {

  const [productsArray, setProducts] = useRecoilState(productQ);
  let [selectedProductID, setCurrentProductId] = useRecoilState(selectedProductId);

  var currentId = selectedProductID;
  var currentProduct;

  productsArray.forEach(product => {
    var stringVersion = JSON.stringify(product.id);
    if (stringVersion === selectedProductID) {
      currentProduct = product;
    }
  })

  let stylesArray = useRecoilValue(currentStylesSelector);

  if (stylesArray.results.length === 0) {
    stylesArray = null;
  }

  return (
    <div className="overview" id="overview-module">
      <ProductInformation currentProduct={currentProduct}
        styles={stylesArray} />
      <StyleSelector styles={stylesArray} />
    </div>

  )
};



export default Overview;
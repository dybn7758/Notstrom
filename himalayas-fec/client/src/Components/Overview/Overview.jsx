import React from 'react';
import axios from 'axios';
import ImageGallery from './ImageGallery.jsx';
import ProductInformation from './ProductInformation.jsx';
import StyleSelector from './StyleSelector.jsx';
import Cart from './Cart.jsx';

const Overview = (props) => {

    return (
      <div className="overview">
        <ImageGallery />
        <ProductInformation />
        <StyleSelector />
        <Cart />
      </div>

    )
  }



export default Overview;
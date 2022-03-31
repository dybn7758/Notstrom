import React from 'react';
import axios from 'axios';
import ImageGallery from './ImageGallery.jsx';
import ProductInformation from './ProductInformation.jsx';
import StyleSelector from './StyleSelector.jsx';
import Cart from './Cart.jsx';

class Overview extends React.Component(props) {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    }

  //   const getStyles = (currentProduct) => {
  //     axios.get(`products/${currentProduct}/styles`)
  //     .then(stylesData => {

  //     }
  //   }

   }


  render() {

    return (
      <div className="overview">
        <ImageGallery />
        <ProductInformation />
        <StyleSelector />
        <Cart />
      </div>

    )
  }

}


export default Overview;
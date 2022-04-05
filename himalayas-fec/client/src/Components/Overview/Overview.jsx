import React from 'react';
import { render } from "react-dom";
import axios from 'axios';
import ImageGallery from './ImageGallery.jsx';
import ProductInformation from './ProductInformation.jsx';
import StyleSelector from './StyleSelector.jsx';
import Cart from './Cart.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    }
  }

  componentDidMount() {
    this.getAllProducts();
  }

  getAllProducts() {
    const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products`;
    const key = "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";
    const config = { headers: { Authorization: key } };
    axios.get(url, config)
      .then((response) => {
        console.log(response);
        this.setState({
          products: response.data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="overview">
        <ImageGallery />
        <ProductInformation products={this.state.products}/>
        <StyleSelector />
        <Cart />
      </div>

    )
  };
};



export default Overview;
import React, {useState} from 'react';
import { priceVal, productResponse, categoryResponse, productMetaReviewsSelector } from '../../lib/Atoms.jsx';
import {productQ} from '../../App.jsx';
import Cart from './Cart.jsx'
import Rating from './Rating.jsx'
import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';


const ProductInformation = (props) => {
  // console.log('piprops', props);
  const [priceValue, setPrice] = useRecoilState(priceVal);

  let prod = props.currentProduct;

  // if (!props.styles) {

  //   var price = prod.default_price;
  //   const prodSelect = () => {
  //     return prod;
  //   }
  //   // var currentStyle = null;

  // } else {
    let styles = props.styles;
    let defaultStyle = styles.results[0];


    const findDefault = () => {
      styles.results.map(style => {
        if (style['default?']) {
          defaultStyle = style;
        }
      })
    };

    findDefault();

    const [currentStyle, selectStyle] = useState(defaultStyle);
    // console.log('currentStyle', currentStyle);
    var price;

    const prodSelect = () => {
      if (!currentStyle) {
        selectStyle(prod);
        return currentStyle;
      } else {
        return currentStyle;
      }
    };

  //



  return (

    <div className="ProductInformation">
      <Rating />
      <h2 id="category"><i>{prod.category}</i></h2>
      <h3 id="name">{prod.name}</h3>
      <p id="price">${priceValue}</p>
      <p id="slogan"><b>{prod.slogan}</b></p>
      <div id="description">
        <p>{prod.description}</p>
      </div>
      <div className="cart">
        {}
        <Cart style={prodSelect()}/>
      </div>
    </div>

  )
}



export default ProductInformation;



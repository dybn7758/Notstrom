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

  const [priceValue, setPrice] = useRecoilState(priceVal);

  let prod = props.currentProduct;

  if (props.styles) {

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

  } else {
    var price = prod.default_price;
    var currentStyle = null;
  }

    let prodSelect = () => {
      if (!currentStyle) {
        var currentStyle = prod;
        return currentStyle;
      } else {
      return currentStyle;
      }
    }

  // console.log('cs', [currentStyle]);

  return (

    <div className="ProductInformation">
      <Rating />
      <h4 id="category">{prod.category}</h4>
      <h3 id="name">{prod.name}</h3>
      <p id="price">${priceValue}</p>
      <p id="slogan">{prod.slogan}</p>
      <div id="description">
        <p>{prod.description}</p>
      </div>
      {/* <div id="features">
        <p><b>Features:</b>{props.styles.features}</p>
      </div> */}
      <div className="cart">
        {}
        <Cart style={prodSelect()}/>
      </div>
      <div id="share" >
        <span>Facebook Icon</span>
        <span>Twitter Icon</span>
        <span>Pintrest Icon</span>
      </div>
    </div>

  )
}



export default ProductInformation;



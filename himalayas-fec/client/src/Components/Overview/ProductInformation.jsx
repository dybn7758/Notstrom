import React from 'react';
import { productResponse, categoryResponse } from '../../lib/Atoms.jsx';
import {productQ} from '../../App.jsx';
import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';


const ProductInformation = (props) => {

  let prod = props.currentProduct;


  return (

    <div className="ProductInformation">
      <span id="rating">Rating: ***__</span>
      <h4 id="category">{prod.category}</h4>
      <h3 id="name">{prod.name}</h3>
      <p id="price">${prod.default_price}</p>
      <p id="slogan">{prod.slogan}</p>
      <div id="description">
        <p>{prod.description}</p>
      </div>
      {/* <div id="features">
        <p><b>Features:</b>{props.styles.features}</p>
      </div> */}
      <div id="share" >
        <span>Facebook Icon</span>
        <span>Twitter Icon</span>
        <span>Pintrest Icon</span>
      </div>
    </div>

  )
}



export default ProductInformation;



// {
//   "id": 11,
//   "name": "Air Minis 250",
//   "slogan": "Full court support",
//   "description": "This optimized air cushion pocket reduces impact but keeps a perfect balance underfoot.",
//   "category": "Basketball Shoes",
//   "default_price": "0",
//   "features": [
//   {
//           "feature": "Sole",
//           "value": "Rubber"
//       },
//   {
//           "feature": "Material",
//           "value": "FullControlSkin"
//       },
//   // ...
//   ],
// }

//layout
//1.star rating
//2.category
//3.title
//4.price
//5.slogan
//6.description
//7. overview
//8. share links
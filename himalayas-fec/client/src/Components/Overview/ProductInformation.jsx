import React from 'react';
import { productResponse } from '../../lib/Atoms.jsx';


const ProductInformation = (props) => {

  const productArray = productResponse();
  console.log('pa', productArray);

  return (

    <div className="ProductInformation">
      <span id="rating">Rating: ***__</span>
      <h4 id="category">{props.products.category}</h4>
      <h3 id="name">{props.products.name}</h3>
      <p id="price">{props.products.default_price}</p>
      <p id="slogan">{props.products.slogan}</p>
      <div id="description">
        <p>{props.products.description}</p>
      </div>
      <div id="overview">
        <p>Product Overview Here</p>
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
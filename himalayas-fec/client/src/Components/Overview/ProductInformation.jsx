import React from 'react';


const ProductInformation = (props) => {
  return (

    <div className="ProductInformation">
      <span id="rating">Rating: ***__</span>
      <h4 id="category">Category</h4>
      <h3 id="title">Product Name</h3>
      <p id="price">$10,000</p>
      <p id="slogan">Product Slogan Here</p>
      <div id="description">
        <p><b>description:</b> this will contain a few sentences describing the product</p>
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
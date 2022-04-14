import React, { useState } from 'react';


const Cart = (props) => {
  console.log('cartprops', props);
  if (props.style.skus !== undefined) {

    var skusArray = Object.keys(props.style.skus);
    const [currentSku, setSku] = useState(skusArray[0]);
    var skuIndex = skusArray.indexOf(currentSku);

    skusArray = skusArray.map((sku, index) => {
      return {
        [sku]: props.style.skus[sku]
      }
    })

    const counter = (qty) => {
      var countArray = [];
      for (var count = 1; count <= qty; count++) {
        countArray.push(count);
      }
      return countArray;
    }

    const handleChange = (event) => {
    }


    return (
      <div className="cart-view">
        <button type="button">ADD TO CART</button>
        <label htmlFor="size">SELECT SIZE</label>
        <select name="size" id="size" onChange={handleChange}>
          {skusArray.map((sku, index) => {
            let skuSelector = Object.keys(sku);
            return(
              <option value={sku[skuSelector].size} key={index}>{sku[skuSelector].size}</option>
              )
            })};
        </select>
        <label htmlFor="quantityl">SELECT QUANTITY</label>
        <select name="quantity" id="quantity">
        {counter(skusArray[skuIndex][currentSku].quantity).map((count, index) => {
          return (
            <option value={count} key={index}>{count}</option>
            )
          })};
        </select>
      </div>
    )

  } else {

    return (
      <div>
        <h3><b>OUT OF STOCK</b></h3>
      </div>
    )
  }
};

  export default Cart;
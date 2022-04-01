import React from 'react';


const StyleSelector = (props) => {
  return (
    <div>
      <label for="size">SELECT SIZE</label>
      <select name="size" id="size">
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
        <option value="extraLarge">Extra Large</option>
      </select>

      <label for="quantity">SELECT QUANTITY</label>
      <select name="quantity" id="quantity">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
  )
}



export default StyleSelector;
import React from 'react';
import { stylesResponse } from '../../lib/Atoms.jsx';
import { productStyles } from '../../lib/searchAPI.js';
import { selectedProduct } from './Overview.jsx';
import {productQ} from '../../App.jsx';
import {productResponse, selectedProductId} from '../../lib/Atoms.jsx';
import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';


const StyleSelector = (props) => {

  var styles = props.styles.results;

  return (
    <div id="styles">
      <h3>Styles</h3>
        <div id="imageContainer">
          {styles.map((style, index) => (
            <div>
              <img src={style.photos[0].thumbnail_url}></img>
            </div>
          ))}
        </div>
    </div>
  )
}



export default StyleSelector;
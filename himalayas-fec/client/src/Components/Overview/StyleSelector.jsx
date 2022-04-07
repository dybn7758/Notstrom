import React, { useState } from 'react';
import ImageGallery from './ImageGallery.jsx';
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

  const [currentStyle, setStyle] = useState(styles[0])
  // console.log('current', currentStyle)

  const photos = styles.map(style => {
    return style.photos;
  })

  const thumbnails = styles.map(style => {
    return {
      name: style.name,
      thumbnail: style.photos[0].thumbnail_url};
  })

  return (
    <div id="styles">
      <h3>Styles</h3>
        <div id="imageContainer">
          {thumbnails.map((thumbnail, index) => (
            <div key={index}>
              <p className="styleName">{thumbnail.name}</p>
              <img className="styleThumb"
              src={thumbnail.thumbnail} width="75" height="90"
              // onClick={setStyle(thumbnail.currentStyle)}
              ></img>
            </div>
          ))}
        </div>
      <ImageGallery  style={currentStyle}/>
    </div>
  )
}





export default StyleSelector;
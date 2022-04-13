import React, { useState, useEffect } from 'react';
import StyleDisplay from './StyleDisplay.jsx';

const StyleGallery = (props) => {

  const [imageSelection, selectImage] = useState(props.style.photos[0].url)

  useEffect(() => {
    selectImage(props.style.photos[0].url);
  }, [props.style])

  const imageSelector = (targetUrl) => {
    selectImage(targetUrl)
  }

    const photos = props.style.photos;

    return (
      <div className="gallery">
        <h2>Fashion Gallery</h2>
        {photos.map((photo, index) => {
          return(
            <div className="gallery-cell"
            key={index}>
              <img src={photo.thumbnail_url} width="75" height="90"
                url={photo.url}
                onClick={event => imageSelector(event.target.attributes.url.nodeValue)}></img>
            </div>
          )
        })}
        <StyleDisplay image={imageSelection} />
      </div>
    )
  }


export default StyleGallery;


// <div class="gallery js-flickity"
//   data-flickity-options='{ "wrapAround": true }'>
//   <div class="gallery-cell"></div>
//   <div class="gallery-cell"></div>
//   <div class="gallery-cell"></div>
//   <div class="gallery-cell"></div>
//   <div class="gallery-cell"></div>
// </div>
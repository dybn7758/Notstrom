import React from 'react';




const ImageGallery = (props) => {

  const photos = props.style.photos;



  console.log('igprops', props);

  return (
    <div className="gallery js-flickity"
    data-flickity-options='{ "wrapAround": true }'>
      <h2>Image Gallery</h2>
      {photos.map((photo, index) => {
        return(
          <div className="gallery-cell"
          key={index}>
            <img src={photo.thumbnail_url} width="75" height="90"></img>
          </div>
        )
      })}
    </div>
  )
}


export default ImageGallery;


// <div class="gallery js-flickity"
//   data-flickity-options='{ "wrapAround": true }'>
//   <div class="gallery-cell"></div>
//   <div class="gallery-cell"></div>
//   <div class="gallery-cell"></div>
//   <div class="gallery-cell"></div>
//   <div class="gallery-cell"></div>
// </div>
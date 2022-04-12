import React, { useState } from 'react';
import StyleDisplay from './StyleDisplay.jsx';

class StyleGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: this.props.style.photos[0].url
    }

  this.selectImage = this.selectImage.bind(this);

  }

   selectImage() {
    // console.log(event.target.attributes.url.nodeValue)
    this.setState({ image: event.target.attributes.url.nodeValue })

  }

  render () {

    const photos = this.props.style.photos;

    return (
      <div className="gallery">
        <h2>Image Gallery</h2>
        {photos.map((photo, index) => {
          return(
            <div className="gallery-cell"
            key={index}>
              <img src={photo.thumbnail_url} width="75" height="90"
                url={photo.url}
                onClick={this.selectImage}></img>
            </div>
          )
        })}
        <StyleDisplay image={this.state.image} />
      </div>
    )
  }
}


export default StyleGallery;


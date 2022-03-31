import React from 'react';
import RelatedModal from './RelatedModal.jsx';
import {Star} from 'react-ionicons';

export default class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      category: 'Category',
      price: 100,
      image: 'skyblue',
    }
  }

  render() {

    const background = this.state.image;

    return (
      <div>

      <div style={{
        position: 'relative',
        backgroundColor: background,
        width: 200,
        height: 225,
      }} onClick={() => {
        console.log('clicked');
      }}>

      <Star style={{
        position: 'absolute',
        top: 10,
        right: 10,
      }}
      onClick={() => {
        console.log('star clicked')
        }}/>

      </div>
        <div style={{
        position: 'relative',
        bottom: 0,
        backgroundColor: 'gray',
        width: 200,
        height: 100,
        alignItems: 'bottom',
      }}>
      <h1 style={{
        position: 'absolute',
        left: 10,
        fontSize: 14,
      }}>{this.state.category}</h1>
      <h1 style={{
        position: 'absolute',
        right: 10,
        bottom: 10,
        fontSize: 14,
      }}>{this.state.price}</h1>
      </div>
      <RelatedModal/>
      </div>
    )
  }
}


// will be used to assemble individual product cards


// should include

  // Should be clickable
    // Should pass off to product detail page
      // Modal?  Jump to top of page?

  // Image
    // primary image of the product from overview
      // upon hover a sub-carousel should load on the bottom of the image
        // there should be 4 sub-images in the sub-carousel
          // they should be able to be left/right scrolled with buttons
          // clicking a thumbnail should change preview image
            // selected image should persist after hover off
        // list should disappear on hover-off
    // Favorite 'Star'

  // Footer with
    // Category
    // Product Name
    // Price
      // pricing by style?
      // if on sale, should strikethrough OG price, list new price after
    // Star Rating System
      // total rating out of 5
      // should be reflected by 5 partially filled stars
        // rating should be rounded to nearest quarter rating point
      // if there are no reviews, no stars shoul appear

// When a carousel item is 'favorited' it should be added to 'outfit'
  // same design as the carousel
    // rendered dynamically by click
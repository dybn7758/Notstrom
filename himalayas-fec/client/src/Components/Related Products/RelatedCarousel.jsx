import React from 'react';
import RelatedCard from './RelatedCard.jsx';
import {ArrowBackCircle, ArrowForwardCircle} from 'react-ionicons';

const RelatedCarousel = () => {

  return (
    <div style={{ position: 'relative'}}>
      <ArrowBackCircle onClick={()=>{console.log('this')}}/>
      <RelatedCard/>
      <ArrowForwardCircle onClick={()=>{console.log('that')}}/>
    </div>
  )
}

export default RelatedCarousel;

// Any number of related cards should be in the carousel

// upon load should list all related products
  // initial load should always be a default
  // products which do not fit should go off screen
  // list should be centered so that the first item is in the left-most position
// arrows should be available to scroll through the list
  // should only scroll one item at time
  // when the left most card is in it's starting position
    // the left arrow should disappear
    // likewise for right-most image


import React from 'react';
import RelatedCard from './RelatedCard.jsx';
import {ArrowBackCircle, ArrowForwardCircle} from 'react-ionicons';

const RelatedCarousel = () => {

  return (
    <div style={{width: 1000, height: 350, background: 'lightgray', padding: 5, overflow: 'hidden'}}>
      <ArrowBackCircle style={{position: 'relative', top: '50%', right: '5%', zIndex: 5}}onClick={()=>{console.log('this')}}/>
        <RelatedCard/>
        <div style={{float: 'left', position: 'relative', height: 325, width: 200, background: 'black', margin: 10}}></div>
        <div style={{float: 'left', position: 'relative', height: 325, width: 200, background: 'black', margin: 10}}></div>
        <div style={{float: 'left', position: 'relative', height: 325, width: 200, background: 'black', margin: 10}}></div>
        <div style={{float: 'left', position: 'relative', height: 325, width: 200, background: 'black', margin: 10}}></div>
        <div style={{float: 'left', position: 'relative', height: 325, width: 200, background: 'black', margin: 10}}></div>
      <ArrowForwardCircle style={{position: 'relative', top: '50%', right: 10, zIndex: 5}}onClick={()=>{console.log('that')}}/>
    </div>
  )
}

export default RelatedCarousel;
// testing
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
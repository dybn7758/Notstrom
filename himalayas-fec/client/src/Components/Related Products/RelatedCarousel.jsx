import React, {useEffect} from 'react';
import RelatedCard from './RelatedCard.jsx';
import {ArrowBackCircle, ArrowForwardCircle, Star} from 'react-ionicons';
import {RelatedModal} from './RelatedModal.jsx';
import {useRecoilValue, useRecoilState} from 'recoil';
import {styles, stylesResponse, show} from '../../lib/Atoms.jsx';

const RelatedCarousel = () => {

  const [stylesValue, setStyles] = useRecoilState(styles);
  const currentStyles = stylesResponse();
  setStyles(currentStyles);

  const [showValue, setShow] = useRecoilState(show);

  const closeModal = () => {
    setShow(['none']);
  }

  return (
    <div style={{width: 1000, height: 350, background: 'lightgray', margin: 5, overflow: 'hidden'}}>

      <ArrowBackCircle style={{position: 'relative', top: '50%', right: '5%', zIndex: 5}} onClick={()=>{console.log('this')}}/>

        {stylesValue.map((value, index) => {
          return (
            <div key={index} style={{float: 'left', position: 'relative', height: 325, width: 200, margin: 10}}>

            <div style={{ position: 'relative', width: 200, height: 225, backgroundImage: `url(${value.photos[index].url})`}}
            onClick={() => {console.log('clicked picture')}}>

            <Star style={{position: 'absolute', top: 10, right: 10, zIndex: 2}} onClick={() => {setShow(['block'])}}/>

            </div>
              <div style={{position: 'relative', bottom: 0, backgroundColor: 'gray', width: 200, height: 100, alignItems: 'bottom'}}>
                <h1 style={{position: 'absolute', top: 0, left: 10, fontSize: 14}}>Category</h1>
                <h1 style={{position: 'absolute', top: 15, left: 10, fontSize: 14}}>{value.name}</h1>
                <h1 style={{position: 'absolute', top: 30, left: 10, fontSize: 14}}>${value.original_price}</h1>

            <div style={{ height: 20, width: 100, bottom: 10, left: 10, background: 'yellow', position: 'absolute'}}>Stars</div>

            <RelatedModal/>
            </div>
          </div>
          )})}
      <ArrowForwardCircle style={{position: 'relative', top: '50%', right: 10, zIndex: 5}}onClick={()=>{console.log('that')}}/>
    </div>
  )
}

export default RelatedCarousel;

// onMouseEnter={() => {console.log('mouse over!')}} onMouseLeave={() => {console.log()}}

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
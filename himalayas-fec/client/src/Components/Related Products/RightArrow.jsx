import React from 'react';
import {ArrowForwardCircle} from 'react-ionicons';

const RightArrow = () => {
  return (
    <ArrowForwardCircle style={{position: 'relative', top: '50%', right: '5%', zIndex: 5}} onClick={()=>{console.log('that')}}/>
  )
}

export default RightArrow;
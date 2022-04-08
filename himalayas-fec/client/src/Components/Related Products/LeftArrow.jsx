import React from 'react';
import {ArrowBackCircle} from 'react-ionicons';

const LeftArrow = () => {
  return (
    <ArrowBackCircle style={{position: 'relative', top: '50%', left: '5%', zIndex: 5}} onClick={()=>{console.log('this')}}/>
  )
}

export default LeftArrow;
import React from 'react';
import {ArrowBackCircle} from 'react-ionicons';
import {ArrowForwardCircle} from 'react-ionicons';

export const RelatedOutfits = () => {

  return (
    <div>
      <h1 style={{position: 'relative', fontSize: 14}}>Your Outfit</h1>
        <div style={{width: 1000, height: 350, background: 'lightblue', margin: 5, overflow: 'hidden'}}>
          <ArrowBackCircle style={{position: 'relative', top: '50%', left: '5%'}} onClick={()=>{console.log('this')}}/>
          <ArrowForwardCircle style={{position: 'relative', top: '50%', right: '50%'}} onClick={()=>{console.log('that')}}/>
        </div>
    </div>
  )
}


import LeftArrow from './LeftArrow.jsx';
import RightArrow from './RightArrow.jsx';
import {AddCircle} from 'react-ionicons';
import React from 'react';

export const RelatedOutfits = () => {

  return (
    <div>
      <h1 style={{position: 'relative', fontSize: 14}}>Your Outfit</h1>
        <div style={{width: 1000, height: 350, background: 'lightblue', margin: 5, overflow: 'hidden'}}>
          <div style={{float: 'left', position: 'relative', height: 325, width: 200, backgroundColor: 'white', zIndex: 5, margin: 10}}>
            <AddCircle style={{color: 'black', position: 'center', zIndex: 15}} />
          </div>
        </div>
    </div>
  )
}


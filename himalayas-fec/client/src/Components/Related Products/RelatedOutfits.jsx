
import LeftArrow from './LeftArrow.jsx';
import RightArrow from './RightArrow.jsx';
import React from 'react';

export const RelatedOutfits = () => {

  return (
    <div>
      <h1 style={{position: 'relative', fontSize: 14}}>Your Outfit</h1>
        <div style={{width: 1000, height: 350, background: 'lightblue', margin: 5, overflow: 'hidden'}}>
          <LeftArrow/>
          <RightArrow/>
        </div>
    </div>
  )
}


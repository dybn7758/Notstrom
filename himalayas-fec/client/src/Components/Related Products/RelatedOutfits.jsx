import {AddCircle, CloseCircleOutline} from 'react-ionicons';
import React from 'react';

export const RelatedOutfits = () => {

  return (
      <div>
      <div>
          <div style={{width: 1000, height: 350, background: 'lightblue', margin: 5, overflow: 'hidden'}}>
            <div style={{float: 'left', position: 'relative', height: 325, width: 200, backgroundColor: 'white', zIndex: 5, margin: 10}}>
              <CloseCircleOutline style={{position: 'relative', color: 'red', height: 40, width: 40, left: '5%', top: '5%'}}/>
              <AddCircle style={{color: 'black', height: 100, width: 100, width: '50%', marginLeft: '25%', marginRight: '25%', marginTop: '50%', zIndex: 15}} />
              <h1>Add To Outfit</h1>
            </div>
          </div>
      </div>
  </div>
  )
}


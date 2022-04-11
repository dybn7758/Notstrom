import React from 'react';
import {MdOutlineAddCircle} from 'react-icons/md';
import RelatedOutfitCard from './RelatedOutfitCard.jsx';

const RelatedOutfits = () => {

  return (
      <div>
      <div>
          <div style={{width: 1000, height: 350, background: 'lightblue', margin: 5, overflow: 'hidden'}}>
            <div style={{float: 'left', position: 'relative', height: 325, width: 200,
              backgroundColor: 'white', zIndex: 5, margin: 10}}>
                <RelatedOutfitCard/>

              <MdOutlineAddCircle style={{color: 'black', height: 50, width: 50, width: '50%',
                marginLeft: '25%', marginRight: '25%', marginTop: '50%', zIndex: 15}} />
              <div styles={{display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center'}}>Add To Outfit</div>
            </div>
          </div>
      </div>
  </div>
  )
}

export default RelatedOutfits;

import {useRecoilState, useRecoilValue} from 'recoil';
import RelatedCarousel from './RelatedCarousel.jsx';
import {RelatedOutfits} from './RelatedOutfits.jsx';
import React from 'react';


const RelatedProducts = () => {

  return (
        <div>
          <RelatedCarousel/>
          <RelatedOutfits/>
        </div>
      )
  }

  export default RelatedProducts;
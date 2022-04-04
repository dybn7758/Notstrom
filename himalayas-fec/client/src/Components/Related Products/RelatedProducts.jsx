import React from 'react';
import RelatedCarousel from './RelatedCarousel.jsx';
import {RelatedOutfits} from './RelatedOutfits.jsx';
import {dataObj, relatedProductIDs, productDataArray} from '../../lib/Atoms.jsx';
import {useRecoilState, useRecoilValue} from 'recoil';


const RelatedProducts = () => {

  return (
        <div>
          <RelatedCarousel/>
          <RelatedOutfits/>
        </div>
      )
  }

  export default RelatedProducts;
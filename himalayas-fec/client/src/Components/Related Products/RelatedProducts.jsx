import React from 'react';
import RelatedCarousel from './RelatedCarousel.jsx';
import {RelatedOutfits} from './RelatedOutfits.jsx';

const RelatedProducts = () => {

  return (
        <div>
          <h1 style={{position: 'relative', fontSize: 20}}>Related Products</h1>
          <RelatedCarousel/>
          <h1 style={{position: 'relative', fontSize: 20}}>Your Outfit</h1>
          <RelatedOutfits/>
        </div>
      )
  }

  export default RelatedProducts;
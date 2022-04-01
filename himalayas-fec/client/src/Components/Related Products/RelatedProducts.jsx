import React from 'react';
import RelatedCarousel from './RelatedCarousel.jsx';
import RelatedOutfits from './RelatedOutfits.jsx';
import {imageUrl} from '../../lib/Atoms.jsx';
import {useRecoilState} from 'recoil';


const RelatedProducts = () => {

// const [imageValue, setImage] = useRecoilState(imageUrl);
// console.log(imageValue);

  return (
        <div>
          <RelatedCarousel/>
          <RelatedOutfits/>
        </div>
      )
  }

  export default RelatedProducts;

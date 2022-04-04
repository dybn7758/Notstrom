import React from 'react';
import RelatedCarousel from './RelatedCarousel.jsx';
import {RelatedOutfits} from './RelatedOutfits.jsx';
import {dataObj, relatedProductIDs, productDataArray} from '../../lib/Atoms.jsx';
import {useRecoilState, useRecoilValue} from 'recoil';


const RelatedProducts = () => {

// const [productsValue, setProducts] = useRecoilValue(dataObj);
// console.log(productsValue);

// const [relatedValue, setRelated] = useRecoilValue(relatedProductIDs);

// const [productDataArrayValue, setProductDataArray] = useRecoilValue(productDataArray);
// setProductDataArray(dataObj);
// console.log('something', productDataArrayValue);

  return (
        <div>
          <RelatedCarousel/>
          <RelatedOutfits/>
        </div>
      )
  }

  export default RelatedProducts;
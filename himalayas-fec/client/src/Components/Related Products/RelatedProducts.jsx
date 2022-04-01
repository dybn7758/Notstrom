import React from 'react';
import RelatedCarousel from './RelatedCarousel.jsx';
import RelatedOutfits from './RelatedOutfits.jsx';
import axios from 'axios';
import colorString from '../../App.jsx';



const RelatedProducts = () => {


    // const [color, setString] = useRecoilState(colorString);
    // this.getData = this.getData.bind(this);
  return (
        <div>
          <RelatedCarousel/>
          <RelatedOutfits/>
        </div>
      )
  }

  export default RelatedProducts;

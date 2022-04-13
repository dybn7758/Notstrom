import React from "react";
import RelatedCarousel from "./RelatedCarousel.jsx";
import RelatedOutfits from "./RelatedOutfits.jsx";
import RelatedModal from './RelatedModal.jsx'

const RelatedProducts = (props) => {
  return (
    <div id='relatedProducts-module'>
      <RelatedCarousel props1={props.props1}/>
          <RelatedModal/>
      <RelatedOutfits/>
    </div>
  );
};

export default RelatedProducts;

import React from "react";
import RelatedCarousel from "./RelatedCarousel.jsx";
import RelatedOutfits from "./RelatedOutfits.jsx";

const RelatedProducts = (props) => {
  return (
    <div id='relatedProducts-module'>
      <RelatedCarousel props1={props.props1}/>
      <RelatedOutfits/>
    </div>
  );
};

export default RelatedProducts;

import React, {useEffect} from "react";
import RelatedCarousel from "./RelatedCarousel.jsx";
import RelatedOutfits from "./RelatedOutfits.jsx";
import RelatedModal from './RelatedModal.jsx';
import {useRecoilValue, useRecoilState} from 'recoil';
import {selectedProductId, relatedIDs} from '../../lib/Atoms.jsx';
const apiCalls = require('../../lib/searchAPI.js')
import './relatedSass.scss';

const RelatedProducts = (props) => {
  const [selectedIdValue, setSelectedId] = useRecoilState(selectedProductId);
  const [relatedArrayValue, setRelatedArray] = useRecoilState(relatedIDs);


  useEffect(() => {
    const numValue = Number(selectedIdValue)
    const array = apiCalls.relatedProducts(numValue)
    .then( (response) => {
      setRelatedArray(response.data)
    })
    .catch((error) => {
      console.log(error);
    })
  },[selectedProductId]);



  return (
    <div id='relatedProducts-module'>
      <RelatedCarousel props1={props.props1}/>
          <RelatedModal/>
      <RelatedOutfits/>
    </div>
  );
};

export default RelatedProducts;

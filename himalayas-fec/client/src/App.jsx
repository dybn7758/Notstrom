import React, { useEffect } from 'react';
import RelatedProducts from './Components/Related Products/RelatedProducts.jsx';
import QA from './Components/Question_Answers/qa.jsx';
import axios from 'axios';
import {listQuestions, listProducts, listReviews} from './lib/searchAPI.js';
import sampleQa from './Components/Question_Answers/sampleQA.js';
import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

export const productQ = atom({
  key: 'productQ',
  default: sampleQa.results,
});

var App = () => {

  //do out API calls to retrieve data using useEffect(callback, [])
    //pass the second argument so it doesnt create an infinite loop everytime this component renders
  let [prod, setProd] = useRecoilState(productQ);

  useEffect(() => {
    listProducts()
      .then((data) => {setProd(data)})
      .catch((err) => {console.log('err', err)})
  }, []);

  return (
      <div> Himalayas For The Win
        <RelatedProducts/>
        <QA/>
      </div>
  )
};

export default App ;

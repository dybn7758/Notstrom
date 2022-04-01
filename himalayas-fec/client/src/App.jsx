import React, { useEffect } from 'react';
import RelatedProducts from './Components/Related Products/RelatedProducts.jsx';
import QA from './Components/Question_Answers/qa.jsx';
import axios from 'axios';
import {listQuestions, listProducts, listReviews} from './lib/searchAPI.js';
import sampleQa from './Components/Question_Answers/sampleQA.js';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  userRecoilValue,
} from 'recoil';

var App = () => {

  var productQ = atom({
    key: 'productQ',
    default: sampleQa.results,
  });
  let [prod, setProd] = useRecoilState(productQ);

  //do out API calls to retrieve data using useEffect(callback, [])
    //pass the second argument so it doesnt create an infinite loop everytime this component renders
  useEffect(() => {
    listProducts().then((data) => {setProd(data)})
  }, []);



  return (
      <div> Himalayas For The Win
        <RelatedProducts/>
        <QA/>
      </div>
  )
};

export default App;

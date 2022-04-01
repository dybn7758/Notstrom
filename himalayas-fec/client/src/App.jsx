import React, { useEffect } from 'react';
import RelatedProducts from './Components/Related Products/RelatedProducts.jsx';
import QA from './Components/Question_Answers/qa.jsx';
import axios from 'axios';
import {listQuestions, listProducts, listReviews} from './lib/searchAPI.js';
import {RecoilRoot, atom, selector, useRecoilState, userRecoilValue} from 'recoil';

//========== Atoms ===========

export const show = atom({
  key: 'show',
  default: ['none'],
})

var App = () => {


  //do out API calls to retrieve data using useEffect(callback, [])
    //pass the second argument so it doesnt create an infinite loop everytime this component renders
  useEffect(() => {
    listQuestions(37311); //API call to get questions
  }, []);

  return (
      <div> Himalayas For The Win
        <RecoilRoot>
          <RelatedProducts/>
          <QA/>
        </RecoilRoot>
      </div>
  )
};

export default App;

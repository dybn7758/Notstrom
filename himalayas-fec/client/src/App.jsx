import React, { useEffect } from 'react';
import RelatedProducts from './Components/Related Products/RelatedProducts.jsx';
//<<<<<<< HEAD
import Overview from './Components/Overview/Overview.jsx';
//=======
import QA from './Components/Question_Answers/qa.jsx';
<<<<<<< HEAD
//>>>>>>> 96c02372892adebee7914ffb443e8aaa19a2c866

 export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
=======
import axios from 'axios';
import {listQuestions, listProducts, listReviews} from './lib/searchAPI.js';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  userRecoilValue,
} from 'recoil';

var App = () => {
>>>>>>> master

  //do out API calls to retrieve data using useEffect(callback, [])
    //pass the second argument so it doesnt create an infinite loop everytime this component renders
  useEffect(() => {
    listQuestions(37311); //API call to get questions
  }, []);

  return (
    <RecoilRoot>
      <div> Himalayas For The Win
        <Overview />
        <RelatedProducts/>
        <QA/>
      </div>
    </RecoilRoot>
  )
};

export default App;
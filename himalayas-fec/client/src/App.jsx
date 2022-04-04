
import React, { useEffect } from "react";
import RelatedProducts from "./Components/Related Products/RelatedProducts.jsx";
import Overview from "./Components/Overview/Overview.jsx";
import Reviews from "./Components/Reviews/Reviews.jsx";
import QA from "./Components/Question_Answers/qa.jsx";
import sampleQa from './Components/Question_Answers/sampleQA.js';
import sampleMain from '../src/Components/Question_Answers/sampleMain.js';
import axios from "axios";
import { listQuestions, listProducts, listReviews } from "./lib/searchAPI.js";
import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

export const productQ = atom({
  key: 'productQ',
  default: sampleMain,
});

const catalog = atom({
  key: 'catalog',
  default: 'main'
})

var App = () => {
  //do out API calls to retrieve data using useEffect(callback, [])
    //pass the second argument so it doesnt create an infinite loop everytime this component renders
  let [prod, setProd] = useRecoilState(productQ);
  let [pageView, setPageView] = useRecoilState(catalog);
  console.log(pageView);
  console.log('what is prod?', prod);

  //Retrieves data from the API and sets the products to state to render
  //pass the second argument so it doesnt create an infinite loop everytime this component renders
  useEffect(() => {
    listProducts()
      .then((data) => {setProd(data.data)})
      .then(() => {})
      .catch((err) => {console.log('err', err)})
  }, []);

  //Sets the product detail page
  var onClickProduct = (productID) => {
    setPageView(productID);
    return (
      <div> Himalayas For The Win
        <RelatedProducts/>
        <QA/>
      </div>
  )
  };

  var changeView = (page) => {
    setPageView(page);
console.log(setPageView, page);
    if (pageView === 'main') {
      return (
        <table>
          <tbody>
          {prod.map((product, i) => {
            return (
              <tr key = {i}>
                <td value = {product.id} onClick={(e) => {console.log(e.target.attributes.value.value); onClickProduct('product')}}>{product.name}</td>
                <td>{product.description}</td>
              </tr>
            )
          })}
          </tbody>
        </table>
      )
    } else if (pageView !== 'main') {
      return (
          <div> Himalayas For The Win
            <RelatedProducts/>
            <QA/>
          </div>
      )
    }
  };

  // return (
  //   <div className='nav'>
  //     <span className='logo' onClick={() => {changeView('main');}}>Hima-layers
  //     </span>
  //     <span className='searchbar'>
  //       <input type='search' placeholder='Product search...' onChange={() => {console.log('hi')}}></input>
  //     </span>

  //     <div className='main'>{changeView('main')}</div>
  //   </div>
  // )

  return (
      <div>
        {" "}
        Himalayas For The Win
          <Overview />
          <RelatedProducts />
          <QA />
          <Reviews />
      </div>
  );
};

export default App ;


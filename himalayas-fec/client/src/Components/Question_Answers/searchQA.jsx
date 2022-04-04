import React, {useEffect} from 'react';
import axios from 'axios';
import SearchList from './searchList.jsx';
// import sampleQa from '.../sampleQA.js';
import sampleQa from './sampleQA.js';
import {atom, useRecoilState, selector, useRecoilValue} from 'recoil';
import {productQ} from '../../App.jsx';

var SearchQA = () => {

  let productSelect = selector({
  key: 'productCount',
  get: ({get}) => {
    const product = get(productQ);
    console.log('inside selector', product);
    return product.data;
  }
})

//retrieve the current selected product
  const specifiedProductID = useRecoilValue(productSelect);
  console.log('line 21', specifiedProductID);


  function onSearch(search) {
    // this.setState({search});
    search.preventDefault();
        // console.log(this.state.search)
    console.log(useRecoilState(productQ))

  return(
    <div id="search-qa">
      <form>
        <input type='search' placeholder='Search...' value={'hi'} onChange={(e) => {onSearch(e)}}></input>
        <button type='submit' id='search-qa'>Search</button>
      </form>
      {/* <div id="qa">
        {this.state.list.map((entry, i) => {

          return <SearchList key={i} entries={entry}/>}
        )}
      </div> */}
      <button id='more-ans'>More Answered Questions</button><button id='add-ques'>Add a Question +</button>
    </div>
  )
};

export default SearchQA;
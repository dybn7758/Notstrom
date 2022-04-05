import React, { useEffect } from 'react';
import axios from 'axios';
import SearchList from './searchList.jsx';
import sampleQa from './sampleQA.js';
import { atom, useSetRecoilState, useRecoilState, selector, useRecoilValue } from 'recoil';
import { productQ } from '../../App.jsx';
import { productQuestionsSelector, limitedQuestions, limitQuestionSelector, searchQa, filterQuestionSelector } from '../../lib/Atoms.jsx';

var SearchQA = () => {

  //retrieve the current selected product
  const specifiedProductID = useRecoilValue(productQuestionsSelector);

  let [limitQList, setLimitQList] = useRecoilState(limitedQuestions);

  setLimitQList(specifiedProductID);

  let limitedProductQ = useRecoilValue(limitQuestionSelector);

  let [searchQuestions, setSearchQuestion] = useRecoilState(searchQa);

  let filteredProductQ = useRecoilValue(filterQuestionSelector);

  const onSearch = (search) => {
    search.preventDefault();
    //based on the searched
    setSearchQuestion(search.target.value);
  };

  return(
    <div id="search-qa">
      <form>
        <input type='search' placeholder='Search...' onChange={(e) => {onSearch(e)}}></input>
        <button type='submit' id='search-qa'>Search</button>
      </form>
      <div id="qa">
        {filteredProductQ.map((entry, i) => {
          return <SearchList key={i} entries={entry}/>}
        )}
      </div>
      <button id='more-ans'>More Answered Questions</button><button id='add-ques'>Add a Question +</button>
    </div>
  )
};

export default SearchQA;
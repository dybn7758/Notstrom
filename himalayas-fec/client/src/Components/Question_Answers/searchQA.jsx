import React, { useEffect } from 'react';
import axios from 'axios';
import jquey from 'jquery';
import SearchList from './searchList.jsx';
import QuestionModal from './questionModal.jsx';
import sampleQa from './sampleQA.js';
import { atom, useSetRecoilState, useRecoilState, selector, useRecoilValue } from 'recoil';
import { productQ } from '../../App.jsx';
import { productQuestionsSelector, searchQuesCount, limitedQuestions, limitQuestionSelector, searchQa, filterQuestionSelector } from '../../lib/Atoms.jsx';

var SearchQA = () => {
  //retrieve the current selected product
  const specifiedProductID = useRecoilValue(productQuestionsSelector);

  let [limitQList, setLimitQList] = useRecoilState(limitedQuestions);

  setLimitQList(specifiedProductID);

  let limitedProductQ = useRecoilValue(limitQuestionSelector);

  let [searchQuestions, setSearchQuestion] = useRecoilState(searchQa);

  let filteredProductQ = useRecoilValue(filterQuestionSelector);

  let [quesCount, setQuesCount] = useRecoilState(searchQuesCount);

  const onSearch = (search) => {
    search.preventDefault();
    //based on the searched
    setSearchQuestion(search.target.value);
  };

  const showMoreQues = () => {
    // if (quesCount + 2 > filteredProductQ.length) {
    //   setQuesCount(filteredProductQ.length);
    // } else {
      setQuesCount(quesCount + 2);
    // }
  };

  const showLessQues = () => {
    if(quesCount - 2 < 2) {
      setQuesCount(2);
    } else {
      setQuesCount(quesCount - 2);
    }
  };

  const addMoreQuestions = () => {

  };

  if (filteredProductQ.length === 0) {
    return (
      <div><button id='add-ques'>Add a Question +</button>
        <QuestionModal/>
     </div>
    )
  } else {
    return (
      <div id="search-qa">
        <form>
          <input type='search' placeholder='Have a question? Search for answers…' onChange={(e) => {onSearch(e)}}></input>
          <button type='submit' id='search-qa'>Search</button>
        </form>
        <div id="qa">
          {filteredProductQ.map((entry, i, array) => {
            if (array.length < 2) {
              return <SearchList key={i} entries={entry}/>;
            } else if (array.length >= 2 && i === array.length - 1) {
              return (
                <>
                  <SearchList key={i} entries={entry}/>
                  <button key={i + 1} id='more-ans' onClick={() => {showMoreQues();}}>More Answered Questions</button><button key={i + 2} id='less-ans' onClick={() => {showLessQues();}}>Less Answered Questions</button><button key={i + 3} id='add-ques'>Add a Question +</button>
                </>
            );
            } else {
              return <SearchList key={i} entries={entry}/>;
            }
          })}
        </div>
      </div>
    )}
};

export default SearchQA;

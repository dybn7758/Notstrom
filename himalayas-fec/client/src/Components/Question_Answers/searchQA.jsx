import React, { useEffect } from 'react';
import axios from 'axios';
import jquey from 'jquery';
import SearchList from './searchList.jsx';
import QuestionModal from './questionModal.jsx';
import sampleQa from './sampleQA.js';
import { atom, useSetRecoilState, useRecoilState, selector, useRecoilValue } from 'recoil';
import { productQ } from '../../App.jsx';
import { productQuestionsSelector, searchQuesCount, limitedQuestions, limitQuestionSelector, searchQa, filterQuestionSelector, showQuestionModal } from '../../lib/Atoms.jsx';

var SearchQA = () => {
  //retrieve the current selected product
  const specifiedProductID = useRecoilValue(productQuestionsSelector);

  let [limitQList, setLimitQList] = useRecoilState(limitedQuestions);

  setLimitQList(specifiedProductID);

  // let limitedProductQ = useRecoilValue(limitQuestionSelector);

  let [searchQuestions, setSearchQuestion] = useRecoilState(searchQa);

  let filteredProductQ = useRecoilValue(filterQuestionSelector);

  let [quesCount, setQuesCount] = useRecoilState(searchQuesCount);

  let [useModal, setUseModal] = useRecoilState(showQuestionModal);

  const onSearch = (search) => {
    search.preventDefault();
    setSearchQuestion(search.target.value);
  };

  const showMoreQues = () => {
    setQuesCount(quesCount + 2);
  };

  const showLessQues = () => {
    if(quesCount - 2 < 2) {
      setQuesCount(2);
    } else {
      setQuesCount(quesCount - 2);
    }
  };

  const addMoreQuestions = () => {
    //set state to show the modal to add a question
    setUseModal(true);
  };

  const addSearchFeat = (i) => {
    if (filteredProductQ.length !== 0) {
      return (
      <form>
        <input type='search' placeholder='Have a question? Search for answers…' onChange={(e) => {onSearch(e)}} size="75"></input>
        <button type='submit' id='search-qa'>Search</button>
      </form>
      );
    }
  };

  const addMoreAnsQuesFeat = (i) => {
    if (limitQList.length > 2) {
      return (
        <>
          <button id='more-ans' onClick={() => {showMoreQues()}}>More Answered Questions</button><button id='less-ans' onClick={() => {showLessQues()}}>Less Answered Questions</button>
        </>
      );
    }
  };

  return (
    <div id="search-qa">
      {addSearchFeat()}
      <div id="qa">
        {filteredProductQ.map((entry, i, array) => {
            return (
              <>
                <SearchList key={i} entries={entry}/>
              </>
            )
        })}
      </div>
      <div>
        {addMoreAnsQuesFeat()}
        <button id='add-ques' onClick={addMoreQuestions}>Add a Question +</button>
        <QuestionModal/>
      </div>
    </div>
  )
};

export default SearchQA;

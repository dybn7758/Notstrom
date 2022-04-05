import React from 'react';
import {atom, selector, useRecoilValue} from 'recoil';
const apiCalls = require('./searchAPI.js');

//========== Atoms ===========

// ====== Modal Toggle State ======
export const show = atom({
  key: 'show',
  default: ['none'],
})

// ======= Product Data Object ===================

export const productSelector = selector({
  key: 'productSelector',
  get: async ({get}) => {
    const response = await apiCalls.listProducts();
    return response;
  },
})
 //this can be moved to your componenets page -----------------------------
export const productResponse = () => {
  const data = useRecoilValue(productSelector);
  return data.data;
}
// ================================================

// ========= State of current selected value ================
export const selectedProductId = atom({
  key: 'selectedProductId',
  default: '',
});

    // Selector function to grab selected product ID questions
export const productQuestionsSelector = selector({
  key: 'productQuestionsSelector',
  get: async({get}) => {
    const productID = await get(selectedProductId);
    const response = await apiCalls.listQuestions(productID);

    return response.data.results;
  }
});
// ===========================================================

// ========= State of questions ================
export const limitedQuestions = atom({
  key: 'limitedQuestions',
  default: [],
});

export const limitQuestionSelector = selector({
  key: 'limitQuestionSelector',
  get: ({get}) => {
    let listQuestions = get(limitedQuestions);
    let limitedResponse = listQuestions.slice(0, listQuestions.length).sort((a, b) => {return b.question_helpfulness - a.question_helpfulness});
    return limitedResponse.slice(0, 4);
  }
});

export const searchQa = atom({
  key: 'searchQa',
  default: '',
});

export const filterQuestionSelector = selector({
  key: 'filterQuestionSelector',
  get: ({get}) => {
    let querySearch = get(searchQa);
    let sortedList = get(limitedQuestions);
    if(querySearch.length > 2) {
      let filtered = sortedList.filter((search) => search.question_body.indexOf(querySearch) !== -1)
      return filtered;
    } else {
      return sortedList;
    }
  }
});

// ==========================================================
export const searchAnsCount = atom({
  key: 'searchAnsCount',
  default: 2,
})
export const searchAns = atom({
  key: 'searchAns',
  default: [],
});

export const showMoreAnsSelector = selector({
  key: 'showMoreAnsSelector',
  get: ({get}) => {
    let answerList = get(searchAns);
    let answerCount = get(searchAnsCount);

    let sorted = answerList.slice(0, answerList.length).sort((a,b) => b.helpfulness - a.helpfulness)

    return sorted.slice(0, answerCount);
  }
})


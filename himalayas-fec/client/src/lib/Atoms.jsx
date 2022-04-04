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
})

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
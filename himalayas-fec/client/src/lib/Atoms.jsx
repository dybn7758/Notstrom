import React from 'react';
import {atom, selector, useRecoilValue} from 'recoil';
const apiCalls = require('./searchAPI.js');

//========== Atoms ===========

// ====== Modal Toggle State ======
export const show = atom({
  key: 'show',
  default: ['none'],
})
// ======= Product Data Object =====

export const productSelector = selector({
  key: 'productSelector',
  get: async ({get}) => {
    const response = await apiCalls.listProducts()
    return response;
  },
})

export const productResponse = () => {
  const data = useRecoilValue(productSelector);
  return data.data;
}



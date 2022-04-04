import React from 'react';
import {atom, selector, useRecoilValue, useRecoilState} from 'recoil';
const apiCalls = require('./searchAPI.js');

//========== Atoms ===========

// ====== Modal Toggle State ====== working
export const show = atom({
  key: 'show',
  default: ['none'],
})
// ========== Current Styles =========
export const styles = atom({
  key: 'styles',
  default: [],
})

// ======= Product Data Object ===== working

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
//=========== Related Selector =================

export const relatedSelector = selector({
  key: 'relatedSelector',
  get: async ({get}) => {
    const response = await apiCalls.relatedProducts()
    return response;
  }
})

export const relatedResponse = () => {
  const data = useRecoilValue(relatedSelector);
  return data.data;
}

//================ Product Styles ======================

export const productStyles = selector({
  key: 'productStyles',
  get: async ({get}) => {
    const response = await apiCalls.productStyles(37311)
    return response;
  }
})

export const stylesResponse = () => {
  const data = useRecoilValue(productStyles);
  return data.data.results;
}
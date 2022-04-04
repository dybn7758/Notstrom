import React from 'react';
import {atom, selector} from 'recoil';
const apiCalls = require('./searchAPI.js');

//========== Atoms ===========

// ====== Modal Toggle State ======
export const show = atom({
  key: 'show',
  default: ['none'],
})

// ======= Product Data Object =====

export const dataObj = atom({
  key: 'dataObj',
  default: apiCalls.listProducts()
    .then((data) => {
      console.log(data, 'atom data');
    })
    .catch ((error) => {
      console.log('error');
    })
})
// const [imageValue, setImage] = useRecoilState(imageUrl);

export const relatedProductIDs = atom({
  key: 'related',
  default: apiCalls.relatedProducts(37311)
  .then((data) => {
    console.log(data, 'related data');
  })
  .catch ((error) => {
    console.log('error');
  })
})

export const productDataArray = atom({
  key: 'productDataArray',
  default: [],
})


import React from 'react';
import {atom, selector, useRecoilValue, useRecoilState} from 'recoil';
const apiCalls = require('./searchAPI.js');

//================= ATOMS =================

// ====== Modal Toggle State ============== flips between show/hide for modal
export const show = atom({
  key: 'show',
  default: ['none'],
})

// =========== Products ==================== all base products

export const products = atom({
  key: 'products',
  default: [],
})

// ========== Compare Style ID ============== all styles by product id
export const styles = atom({
  key: 'styles',
  default: [],
})

//================ Related IDs ===============
export const relatedIDs = atom({
  key: 'styles',
  default: [],
})

// =============== Category =================== individual category name
export const category = atom({
  key: 'category',
  default: '',
})

// =========== Current/Default ID ========= issues with 10, 12, 14 (no image available)
export const currentID = atom({
  key: 'currentID',
  default: 37311,
})

// =========== Click Metadata ============= not in use yet
export const clickMetadata = atom({
  key: 'clickMetaData',
  default: [],
})

//=============== SELECTORS ===============

// =========== Product Data ======== returns a list of all 'main' products

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

// =========== Current Category =========== return category of current 'main' product
export const categorySelector = selector({
  key: 'categorySelector',
  get: async ({get}) => {
    const [currentIDValue, setCurrentID] = useRecoilState(currentID);
    const response = await apiCalls.productsByID(currentIDValue)
    return response.data;
  }
})

export const categoryResponse = () => {
  const data = useRecoilValue(categorySelector);
  return data.category;
}
//=========== Related Selector ============== returns array of related product IDs

export const relatedSelector = selector({
  key: 'relatedSelector',
  get: async ({get}) => {
    const [currentIDValue, setCurrentID] = useRecoilState(currentID);
    const response = await apiCalls.relatedProducts(currentIDValue)
    return response;
  }
})

export const relatedResponse = () => {
  const data = useRecoilValue(relatedSelector);
  return data.data;
}

//============= Related Products Selector ========

export const relatedProductsSelector = selector({
  key: 'relatedProductsSelector',
  get: async ({get}) => {
    const [currentIDValue, setCurrentID] = useRecoilState(currentID);
    const relatedArray = relatedResponse(); // array of related product ids
    console.log(relatedArray, 'response')
    // return response;
  }
})

export const allRelatedProducts = () => {
  const data = useRecoilValue(relatedProductsSelector);
  return data;
}




//================ Product Styles ============ return product styles by product id

export const productStyles = selector({
  key: 'productStyles',
  get: async ({get}) => {
    const [currentIDValue, setCurrentID] = useRecoilState(currentID);
    const response = await apiCalls.productStyles(currentIDValue)
    return response;
  }
})

export const stylesResponse = () => {
  const data = useRecoilValue(productStyles);
  return data.data.results;
}




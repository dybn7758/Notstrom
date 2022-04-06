import React from 'react';
import {atom, selector, useRecoilValue, useRecoilState} from 'recoil';
const apiCalls = require('./searchAPI.js');

//================= ATOMS =================

// =========== Current/Default ID ========= issues with 10, 12, 14 (no image available)
export const currentID = atom({key: 'currentID', default: 37311})

// ====== Modal Toggle State ============== flips between show/hide for modal
export const show = atom({key: 'show', default: ['none']})

//================ Related IDs Array =============== array of related IDs
export const relatedIDs = atom({key: 'styles', default: [37311, 37312, 37313]})

//================= Current Related ID ======== a single related ID value
export const currentRelatedID = atom({key: 'currentRelatedID', default: [37312]})

// =============== Category =================== individual category name
export const category = atom({key: 'category', default: ''})

//==================== Price ================== individual price
export const price = atom({key: 'price', default: 0.00})

//================ Name ======================= individual product name
export const name = atom({key: 'name', default: ''})

//================ Pictures ===================
export const pictures = atom({key: 'pictures', default: ''})

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

// ============ Single Product By ID ======= returns single product by id
export const singleProductSelector = selector({
  key: 'singleProductSelector',
  get: async ({get}) => {
    const [currentRelatedIDValue, setCurrentRelatedID] = useRecoilState(currentRelatedID);
    const [categoryValue, setCategory] = useRecoilState(category);
    const [nameValue, setName] = useRecoilState(name);
    const [priceValue, setPrice] = useRecoilState(price);

    const response = await apiCalls.productsByID(currentRelatedIDValue);

    setCategory(response.data.category);
    setName(response.data.name);
    setPrice(response.data.default_price);

    console.log(response, 'data in current product')

    return response;
  }
})

export const currentProductByID = () => {
  const data = useRecoilValue(singleProductSelector);
  return data;
}

//=========== Related ID Selector ============== returns array of related product IDs
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
  console.log(data.data, 'data')
  return data.data;
}

//============= Related Products Selector ========

export const relatedProductsSelector = selector({
  key: 'relatedProductsSelector',
  get: async ({get}) => {
    const [relatedValue, setRelated] = useRecoilState(relatedIDs);
    const relatedArray = await apiCalls.productsByID(relatedValue[0]); // array of related product ids
    return relatedArray.data;
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
    const [pictureValue, setPicture] = useRecoilState(pictures);

    const response = await apiCalls.productStyles(currentIDValue)
    console.log(response, 'pictures')
    setPicture(response.data.results[0].photos[0].url)
    return response;
  }
})

export const stylesResponse = () => {
  const data = useRecoilValue(productStyles);
  return data.data.results;
}



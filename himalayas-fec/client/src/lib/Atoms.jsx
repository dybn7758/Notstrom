import React from 'react';
import {atom, selector, useRecoilState, userRecoilValue} from 'recoil';
const apiCalls = require('./searchAPI.js');

//========== Atoms ===========

// ====== Modal Toggle State ======
export const show = atom({
  key: 'show',
  default: ['none'],
})

// ======= Product image ===== getting all data rn
export const imageUrl = atom({
  key: 'url',
  default: apiCalls.listProducts()
      .then((data) => {
        console.log(data, 'data in the atom')
      })
      .catch((error) => {
        console.log(error, 'sucks to suck')
    })
})
// const [imageValue, setImage] = useRecoilState(imageUrl);
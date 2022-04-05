import React from "react";
import { atom, selector, useRecoilValue } from "recoil";
const apiCalls = require("./searchAPI.js");

//========== Atoms ===========

// ====== Modal Toggle State ======
export const show = atom({
  key: "show",
  default: ["none"],
});

// ======= Product Data Object ===================

export const productSelector = selector({
  key: "productSelector",
  get: async ({ get }) => {
    const response = await apiCalls.listProducts();
    return response;
  },
});
//this can be moved to your componenets page -----------------------------
export const productResponse = () => {
  const data = useRecoilValue(productSelector);
  console.log("💔", data);
  return data.data;
};
// ================================================

// ========= State of current selected value ================
export const selectedProductId = atom({
  key: "selectedProductId",
  default: "",
});

// Selector function to grab selected product ID questions
export const productQuestionsSelector = selector({
  key: "productQuestionsSelector",
  get: async ({ get }) => {
    const productID = await get(selectedProductId);
    const response = await apiCalls.listQuestions(productID);
    return response.data.results;
  },
});
// ===========================================================

//==========for all reviews========================

export const productReviewsSelector = selector({
  key: "productReviewsSelector",
  get: async ({ get }) => {
    try {
      const productID = await get(selectedProductId);
      let page = 1;
      let count = 2;
      const response = await apiCalls.listReviews(productID, page, count);
      return response.data.results;
    } catch (err) {
      console.log("err from Atom all review 🤬", err);
    }
  },
});

//==========for meta reviews======================
export const productMetaReviewsSelector = selector({
  key: "productMetaReviewsSelector",
  get: async ({ get }) => {
    try {
      const productID = await get(selectedProductId);
      console.log("🙀in atom current product id:", productID);
      const response = await apiCalls.metaReviews(productID);
      console.log("🤲 in atom current meta review:", response);
      return response.data;
    } catch (err) {
      console.log("err from Atom meta review 🤬", err);
    }
  },
});

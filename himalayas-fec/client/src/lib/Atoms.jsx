import React from "react";
import { atom, selector, useRecoilValue } from "recoil";
const apiCalls = require("./searchAPI.js");

//================= ATOMS =================

// ====== Modal Toggle State ============== flips between show/hide for modal
export const show = atom({
  key: "show",
  default: ["none"],
});
// ========== Compare Style ID ============== not in use yet
export const styles = atom({
  key: "styles",
  default: [],
});
// =========== Current/Default ID ========= issues with 10, 12, 14
export const currentID = atom({
  key: "currentID",
  default: 37311,
});
// =========== Click Metadata ============= not in use yet
export const clickMetadata = atom({
  key: "clickMetaData",
  default: [],
});
//=============== SELECTORS ===============
// =========== Product Data ======== returns a list of all 'main' products
export const productSelector = selector({
  key: "productSelector",
  get: async ({ get }) => {
    const response = await apiCalls.listProducts();
    return response;
  },
});

export const productResponse = () => {
  const data = useRecoilValue(productSelector);
  console.log("💔", data);
  return data.data;
};
// ================================================

// =========== Current Category =========== return category of current 'main' product
export const categorySelector = selector({
  key: "categorySelector",
  get: async ({ get }) => {
    const [currentIDValue, setCurrentID] = useRecoilState(currentID);
    const response = await apiCalls.productsByID(currentIDValue);
    return response.data;
  },
});
export const categoryResponse = () => {
  const data = useRecoilValue(categorySelector);
  return data.category;
};
//=========== Related Selector ============== returns array of related product IDs
export const relatedSelector = selector({
  key: "relatedSelector",
  get: async ({ get }) => {
    const [currentIDValue, setCurrentID] = useRecoilState(currentID);
    const response = await apiCalls.relatedProducts(currentIDValue);
    return response;
  },
});
export const relatedResponse = () => {
  const data = useRecoilValue(relatedSelector);
  return data.data;
};
//================ Product Styles ============ return product styles by product id
export const productStyles = selector({
  key: "productStyles",
  get: async ({ get }) => {
    const [currentIDValue, setCurrentID] = useRecoilState(currentID);
    const response = await apiCalls.productStyles(currentIDValue);
    return response;
  },
});
export const stylesResponse = () => {
  const data = useRecoilValue(productStyles);
  return data.data.results;
};

//=============Selected Product ID ==============
export const selectedProductId = atom({
  key: "selectedProductId",
  default: "",
});

//==============product q selector/===============

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
export const twoMore = atom({
  key: "twoMore",
  default: 2,
});

export const productReviewsSelector = selector({
  key: "productReviewsSelector",
  get: async ({ get }) => {
    try {
      const productID = await get(selectedProductId);
      let page = 1;
      let count = get(twoMore);
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
// ===========================================================

// ========= State of questions ================
export const searchQuesCount = atom({
  key: "searchQuesCount",
  default: 2,
});

export const limitedQuestions = atom({
  key: "limitedQuestions",
  default: [],
});

export const limitQuestionSelector = selector({
  key: "limitQuestionSelector",
  get: ({ get }) => {
    let listQuestions = get(limitedQuestions);
    let questionCount = get(searchQuesCount);
    let limitedResponse = listQuestions
      .slice(0, listQuestions.length)
      .sort((a, b) => {
        return b.question_helpfulness - a.question_helpfulness;
      });
    return limitedResponse.slice(0, questionCount);
  },
});

export const searchQa = atom({
  key: "searchQa",
  default: "",
});

export const filterQuestionSelector = selector({
  key: "filterQuestionSelector",
  get: ({ get }) => {
    let querySearch = get(searchQa);
    let sortedList = get(limitedQuestions);
    let questionCount = get(searchQuesCount);
    if (querySearch.length > 2) {
      let filtered = sortedList.filter(
        (search) => search.question_body.indexOf(querySearch) !== -1
      );
      return filtered;
    } else {
      return sortedList.slice(0, questionCount);
    }
  },
});

// ==========================================================
export const searchAnsCount = atom({
  key: "searchAnsCount",
  default: 2,
});

export const searchAns = atom({
  key: "searchAns",
  default: [],
});

export const showMoreAnsSelector = selector({
  key: "showMoreAnsSelector",
  get: ({ get }) => {
    let answerList = get(searchAns);
    let answerCount = get(searchAnsCount);

    let sorted = answerList
      .slice(0, answerList.length)
      .sort((a, b) => b.helpfulness - a.helpfulness);

    return sorted.slice(0, answerCount);
  },
});

//==============current product selector==============
export const currentProductSelector = selector({
  key: "currentProductSelector",
  get: async ({ get }) => {
    const productID = await get(selectedProductId);

    const response = await apiCalls.selectedProduct(productID);

    return response.data;
  },
});

//============current styles selector================
export const currentStylesSelector = selector({
  key: "currentStylesSelector",
  get: async ({ get }) => {
    const productID = await get(selectedProductId);
    console.log("pi", productID);
    const response = await apiCalls.productStyles(productID);
    return response.data;
  },
});

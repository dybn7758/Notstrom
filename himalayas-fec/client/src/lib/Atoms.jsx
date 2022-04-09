import React from "react";
import { atom, selector, useRecoilValue, useRecoilState } from "recoil";
const apiCalls = require("./searchAPI.js");

//================= ATOMS =================
// ====== Modal Toggle State ============== working - do not touch
export const show = atom({ key: "show", default: ["none"] });

//================ Related IDs Array =============== array of related IDs
export const relatedIDs = atom({ key: "relatedIDs", default: [] });

// ================= Slider State ==================
export const sliderState = atom({ key: "sliderState", default: 0 });

// ================== Modal Data =====================
export const modalData = atom({ key: "modalData", default: 37311 });

//=================== Slider Length ==============
export const sliderLength = atom({ key: "sliderLength", default: 0 });

//================= Current Related ID ======== a single related ID value
export const currentRelatedID = atom({ key: "currentRelatedID", default: [] });

//================ currentFeatures ============
export const currentFeatures = atom({ key: "currentFeatures", default: [] });

// ================= All Related Styles/Products Combined ====
export const stylesAndProducts = atom({
  key: "stylesAndProducts",
  default: [],
});

//================= Current Related Styles ====
export const currentRelatedStyles = atom({
  key: "currentRelatedStyles",
  default: [],
});

//================= Current Related Products ===
export const currentRelatedProducts = atom({
  key: "currentRelatedProducts",
  default: [],
});

//=============Selected Product ID ==============
export const selectedProductId = atom({
  key: "selectedProductId",
  default: "",
});

// ========= State of questions ================
export const searchQuesCount = atom({ key: "searchQuesCount", default: 2 });

export const limitedQuestions = atom({ key: "limitedQuestions", default: [] });

// ====== Modal Toggle State ============== flips between show/hide for modal
export const show = atom({
  key: "show",
  default: ["none"],
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
  // console.log("💔", data);
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

//=========== Related ID Selector ============== in use confirmed
export const relatedSelector = selector({
  key: "relatedSelector",
  get: async ({ get }) => {
    const [relatedArrayValue, setRelatedArray] = useRecoilState(relatedIDs);
    const productID = await get(selectedProductId);
    const response = await apiCalls.relatedProducts(productID);
    setRelatedArray(response.data);
    return response.data;
  },
});

//============= Related Products Selector ========

export const relatedProductsSelector = selector({
  key: "relatedProductsSelector",
  get: async ({ get }) => {
    const [relatedValue, setRelated] = useRecoilState(relatedIDs);
    const relatedArray = await apiCalls.productsByID(relatedValue[0]); // array of related product ids
    return relatedArray.data;
  },
});

export const allRelatedProducts = () => {
  const data = useRecoilValue(relatedProductsSelector);
  return data;
};

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
    const response = await apiCalls.productStyles(productID);
    return response.data;
  },
});

export const sliderSelector = selector({
  key: "sliderSelector",
  get: async ({ get }) => {
    const currentSliderValue = await get(sliderState);
    return currentSliderValue;
  },
});

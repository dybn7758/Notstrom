import React from "react";
import { atom, selector, useRecoilValue, useRecoilState } from "recoil";
const apiCalls = require("./searchAPI.js");

//================= ATOMS =================

// ====== Lists all the products from APICall to main catalog page ==============
export const productQ = atom({
  key: "productQ",
  default: [],
});

// ====== Toggles the main catalog page to a product page =========
export const catalog = atom({
  key: "catalog",
  default: "main",
});
// =========== Current/Default ID ========= issues with 10, 12, 14 (no image available)
export const currentID = atom({ key: "currentID", default: 37311 });

// =========== Related Index ===============
export const relatedIndex = atom({ key: "relatedIndex", default: 2 });

// =========== Related On Sale =============
export const relatedOnSale = atom({ key: "relatedOnSale", default: false });

// ====== Modal Toggle State ============== working - do not touch
export const show = atom({ key: "show", default: ["none"] });

//================ Related IDs Array =============== array of related IDs
export const relatedIDs = atom({ key: "relatedIDs", default: []});

// ================= Slider State ==================
export const sliderState = atom({ key: "sliderState", default: 0 });

// ================= Outfit Cards ====================
export const outfitCards = atom({ key: "outfitCards", default: [] });

// ================== Modal Data =====================
export const modalData = atom({ key: "modalData", default: "" });

// ==================== Button Toggle =============
export const buttonToggle = atom({
  key: "buttonToggle",
  default: ["none", ""],
});

// =================== Current Product ===============
export const currentProduct = atom({ key: "currentProduct", default: {} });

//=================== Current Related Name ===================
export const currentRelatedName = atom({
  key: "currentRelatedName",
  default: "",
});

//==================== Current Related Styles ================
export const currentRelatedStyles = atom({
  key: "currentRelatedStyles",
  default: [],
});

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

export const modalButtonShowHide = atom({
  key: 'modalButtonShowHide',
  default: ['none', 'block'],
})

//================= Current Related Products ===
export const currentRelatedProducts = atom({
  key: "currentRelatedProducts",
  default: [],
});

//=============Selected Product ID ==============
export const selectedProductId = atom({
  key: "selectedProductId",
  default: '37311',
});

// =========== Product Data ======== returns a list of all 'main' products
export const productSelector = selector({
  key: "productSelector",
  get: async ({ get }) => {
    const response = await apiCalls.listProducts(100);
    return response.data;
  },
});

export const categoryProductsMain = selector({
  key: "categoryProductsMain",
  get: ({ get }) => {
    let products = get(productQ);
    let sortedProduct = {};
    products.forEach((product) => {
      if (sortedProduct[product.category] === undefined) {
        sortedProduct[product.category] = [product];
      } else {
        let currentInventory = sortedProduct[product.category];
        sortedProduct[product.category] = [...currentInventory, product];
      }
    });
    return sortedProduct;
  },
});

export const productResponse = () => {
  const data = useRecoilValue(productSelector);
  // console.log("💔", data);
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
    console.log(productID, "this is product ID");
    const response = await apiCalls.relatedProducts(productID);
    setRelatedArray(response.data);
    return response.data;
  },
});

export const relatedResponse = () => {
  const data = useRecoilValue(relatedSelector);
  return data.data;
};

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

// ===========================REVIEW Component==============================

//=============================for all reviews========================

export const showWriteReviewModal = atom({
  key: "showwritereviewmodal",
  default: false,
});

export const sortParam = atom({
  key: "sortParam",
  default: "helpful",
});

export const productReviewsSelector = selector({
  key: "productReviewsSelector",
  get: async ({ get }) => {
    try {
      const productID = await get(selectedProductId);
      let page = 1;
      let count = 1000;
      let sort = get(sortParam);
      const response = await apiCalls.listReviews(productID, page, count, sort);
      return response.data.results;
    } catch (err) {
      console.log("err from Atom all review 🤬", err);
    }
  },
});

// ===============for show two reviews===================================
export const reviewsCount = atom({
  key: "reviewsCount",
  default: 2,
});

// ===================for review photo upload===============================
export const reviewPhotoes = atom({
  key: "reviewPhotoes",
  default: [],
});

export const toggleReview = atom({
  key: "toggleReview",
  default: false,
});

// =============for write reviews =================
export const specificCharacteristics = atom({
  key: "specificCharacteristics",
  default: {},
});

//==========for meta reviews======================
export const productMetaReviewsSelector = selector({
  key: "productMetaReviewsSelector",
  get: async ({ get }) => {
    try {
      const productID = await get(selectedProductId);
      // console.log("🙀in atom current product id:", productID);
      const response = await apiCalls.metaReviews(productID);
      // console.log("🤲 in atom current meta review:", response);
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
  default: 3,
});

export const limitedQuestions = atom({
  key: "limitedQuestions",
  default: [],
});

export const searchProductList = atom({
  key: "searchProductList",
  default: "",
});

export const filterSearchProductSelector = selector({
  key: "filterSearchProductSelector",
  get: ({ get }) => {
    let searchList = get(productQ);
    let searchParam = get(searchProductList).toLowerCase();

    let filteredSearch = searchList.filter((product) => {
      let categoryToLowerCase = product.category.toLowerCase();
      let nameToLowerCase = product.name.toLowerCase();
      let conditionOne = categoryToLowerCase.indexOf(searchParam) !== -1;
      let conditionTwo = nameToLowerCase.indexOf(searchParam) !== -1;
      return conditionOne || conditionTwo;
    });
    return filteredSearch;
  },
});

export const questionModalData = selector({
  key: "questionModalData",
  get: ({ get }) => {
    let productData = get(productQ);
    let productId = get(selectedProductId);
    return productData.filter((id) => id.id.toString() === productId);
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
      if (filtered.length === 0) {
        return sortedList.slice(0, questionCount);
      }
      return filtered;
    } else {
      return sortedList.slice(0, questionCount);
    }
  },
});

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

    let sortedBySeller = sorted.filter((name) => {
      return name.answerer_name === "Seller";
    });
    let sortedByOthers = sorted.filter((name) => {
      return name.answerer_name !== "Seller";
    });

    let answerers = [...sortedBySeller, ...sortedByOthers];

    return answerers.slice(0, answerCount);
  },
});

export const reportedAnswer = atom({
  key: "reportedAnswer",
  default: "report",
});

export const showQuestionModal = atom({
  key: "showQuestionModal",
  default: false,
});

export const showAnswerModal = atom({
  key: "showAnswerModal",
  default: false,
});

export const specifiedQuestion = atom({
  key: "specifiedQuestion",
  default: "",
});

export const answerModalSelector = selector({
  key: "answerModalSelector",
  get: ({ get }) => {
    let productQuestion = get(limitedQuestions);
    let specifiedQuestionId = get(specifiedQuestion);
    let filteredQuestion = productQuestion.filter((question) => {
      return question.question_id === parseInt(specifiedQuestionId);
    });

    return filteredQuestion[0];
  },
});

export const photoModal = atom({
  key: "photoModal",
  default: [],
});

export const toggleUpload = atom({
  key: "toggleUpload",
  default: false,
});

export const showSeachModal = atom({
  key: "showSeachModal",
  default: false,
});

// ==========================================================

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

//========== Global Click Handler ==================
export const clickListenerSelector = selector({
  key: "clickListenerSelector",
  get: ({ get }) => {
    return document.addEventListener("click", (event) => {
      console.log("element", event.target.nodeName);
      console.log("time", new Date(event.timeStamp));

      let element = event.target.nodeName;
      let widget = null;
      let time = new Date(event.timeStamp);

      event.path.forEach((module) => {
        if (module.id !== undefined && module.id.indexOf("-module") !== -1) {
          widget = module.id.split("-module")[0];
          console.log("widget", widget);
        }
      });

      if (element && widget && time) {
        apiCalls.applicationClick({ time, widget, element });
      }
    });
  },
});

// =====for theme switching ======================
export const theme = atom({
  key: "ThemeMode",
  default: false,
});

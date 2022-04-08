import React from 'react';
import {atom, selector, useRecoilValue, useRecoilState} from 'recoil';
const apiCalls = require('./searchAPI.js');

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
  console.log("💔", data);
  return data.data;

};
// ================================================

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
//================ Product Styles ============ return product styles by product id
export const productStyles = selector({
  key: 'productStyles',
  get: async ({get}) => {
    const [currentIDValue, setCurrentID] = useRecoilState(currentID);
    const response = await apiCalls.productStyles(currentIDValue);
    return response;
  }
})

export const stylesResponse = () => {
  const data = useRecoilValue(productStyles);
  return data.data.results;
}


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
// ===========================================================

// ========= State of questions ================
export const searchQuesCount = atom({
  key: 'searchQuesCount',
  default: 2,
});

export const limitedQuestions = atom({
  key: 'limitedQuestions',
  default: [],
});

// export const limitQuestionSelector = selector({
//   key: 'limitQuestionSelector',
//   get: ({get}) => {
//     let listQuestions = get(limitedQuestions);
//     let questionCount = get(searchQuesCount);
//     let limitedResponse = listQuestions.slice(0, listQuestions.length).sort((a, b) => {return b.question_helpfulness - a.question_helpfulness});
//     return limitedResponse.slice(0, questionCount);
//   }
// });
export const questionModalData = selector({
  key: 'questionModalData',
  get: ({get}) => {
    let productData = get(productQ);
    let productId = get(selectedProductId);

    return productData.filter((id) => id.id.toString() === productId);
  }
});

export const searchQa = atom({
  key: 'searchQa',
  default: '',
});

export const filterQuestionSelector = selector({
  key: 'filterQuestionSelector',
  get: ({get}) => {
    let querySearch = get(searchQa);
    let sortedList = get(limitedQuestions);
    let questionCount = get(searchQuesCount);
    if(querySearch.length > 2) {
      let filtered = sortedList.filter((search) => search.question_body.indexOf(querySearch) !== -1)
      return filtered;
    } else {
      return sortedList.slice(0, questionCount);
    }
  }
});

export const searchAnsCount = atom({
  key: 'searchAnsCount',
  default: 2,
});

export const searchAns = atom({
  key: 'searchAns',
  default: [],
});

export const showMoreAnsSelector = selector({
  key: 'showMoreAnsSelector',
  get: ({get}) => {
    let answerList = get(searchAns);
    let answerCount = get(searchAnsCount);

    let sorted = answerList.slice(0, answerList.length).sort((a,b) => b.helpfulness - a.helpfulness);

    let sortedBySeller = sorted.filter((name) => {
      return name.answerer_name === 'Seller';
    });
    let sortedByOthers = sorted.filter((name) => {
      return name.answerer_name !== 'Seller';
    });

    let answerers = [...sortedBySeller, ...sortedByOthers]

    return answerers.slice(0, answerCount);
  }
});

export const reportedAnswer = atom({
  key: 'reportedAnswer',
  default: 'report',
});

export const showQuestionModal = atom({
  key: 'showQuestionModal',
  default: false,
});

export const showAnswerModal = atom({
  key: 'showAnswerModal',
  default: false,
});

export const specifiedQuestion = atom({
  key: 'specifiedQuestion',
  default: ""
});

export const answerModalSelector = selector({
  key: 'answerModalSelector',
  get: ({get}) => {
    let productQuestion = get(limitedQuestions);
    let specifiedQuestionId = get(specifiedQuestion)
    let filteredQuestion = productQuestion.filter((question) => {
      return question.question_id === parseInt(specifiedQuestionId);
    })

    return filteredQuestion[0];
  }
});

export const photoModal = atom({
  key: 'photoModal',
  default: []
});

export const toggleUpload = atom({
  key: 'toggleUpload',
  default: false
});
// ==========================================================

//==============current product selector==============
export const currentProductSelector = selector({
  key: 'currentProductSelector',
  get: async({get}) => {
    const productID = await get(selectedProductId);

    const response = await apiCalls.selectedProduct(productID);

    return response.data;

  }
})

//============current styles selector================
export const currentStylesSelector = selector({
  key: 'currentStylesSelector',
  get: async({get}) => {
    const productID = await get(selectedProductId);
    console.log('pi', productID);
    const response = await apiCalls.productStyles(productID);
    return response.data;
  }
})


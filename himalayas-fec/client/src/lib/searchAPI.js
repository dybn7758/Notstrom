import { API_KEY, CAMPUS_CODE } from "../config.js";
import axios from "axios";
import react from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { relatedIDs } from "./Atoms.jsx";

const serverUrl = `https://app-hrsei-api.herokuapp.com/api/fec2/${CAMPUS_CODE}`;

var axiosGet = (url) => {
  let options = {
    headers: { Authorization: API_KEY },
    method: "GET",
    url: url,
    contentType: "application/json",
  };

  //Can chain more promises to the API call if you want to set state after invocation
  //Don't change the setup here because it will affect other API calls.
  return axios(options)
    .then((data) => {
      // console.log("Data received", data);
      //console.log("Data received", data);
      return data;
    })
    .catch((err) => {
      console.log("Error from API", err);
    });
};

var axiosPost = (url, data) => {
  let options = {
    headers: { Authorization: API_KEY },
    method: "POST",
    url: url,
    contentType: "application/json",
    data: data,
  };

  return axios(options)
    .then((data) => {
      console.log("Data posted", data);
      return data;
    })
    .catch((err) => {
      console.log("Error from API", err);
    });
};

var axiosPut = (url) => {
  let options = {
    headers: { Authorization: API_KEY },
    method: "PUT",
    url: url,
  };

  return axios(options)
    .then((data) => {
      console.log("Data updated", data);
      return data;
    })
    .catch((err) => {
      console.log("Error from API", err);
    });
};

//--------------- API Questions -----------------
var listQuestions = (productId, count, page) => {
  //Might not need the count and page parameters yet...
  //if needed, adjust the parameterURL to include these
  let parameterURL = `${serverUrl}/qa/questions?product_id=${productId}`;
  return axiosGet(parameterURL);
};

//--------------- API Products -----------------
var listProducts = (count, page) => {
  //Might not need the count and page parameters yet...
  //if needed, adjust the parameterURL to include these
  // ?page=1&count=100 param needs be added

  let parameterURL = `${serverUrl}/products?count=${count}`;

  return axiosGet(parameterURL);
};

var selectedProduct = (productId, count, page) => {
  let parameterURL = `${serverUrl}/products?product_id=${productId}`;

  return axiosGet(parameterURL);
};

var postQuestions = (body) => {
  let parameterURL = `${serverUrl}/qa/questions`;

  return axiosPost(parameterURL, body);
};

var postAnswers = (body, questionId) => {
  let parameterURL = `${serverUrl}/qa/questions/${questionId}/answers`;

  return axiosPost(parameterURL, body);
};

var putQuesHelpful = (questionId) => {
  let parameterURL = `${serverUrl}/qa/questions/${questionId}/helpful`;

  return axiosPut(parameterURL);
};

// var putQuesReport = (body, questionId) => {
//   let parameterURL = `${serverUrl}/qa/questions/${questionId}/report`;

//   return axiosPut(parameterURL, body);
// };

var putAnsHelpful = (answerId) => {
  let parameterURL = `${serverUrl}/qa/answers/${answerId}/helpful`;

  return axiosPut(parameterURL);
};

var putAnsReport = (answerId) => {
  let parameterURL = `${serverUrl}/qa/answers/${answerId}/report`;

  return axiosPut(parameterURL);
};

//--------------- API Reviews -----------------
var listReviews = (productId, page, count, sort) => {
  //Might not need the count and page parameters yet...
  //if needed, adjust the parameterURL to include these

  //
  let parameterURL = `${serverUrl}/reviews/?product_id=${productId}&count=${count}&page=${page}&sort=${sort}`;

  return axiosGet(parameterURL);
};

//--------------API Reviews Meta Data--------------
var metaReviews = (productId) => {
  let parameterURL = `${serverUrl}/reviews/meta?product_id=${productId}`;
  return axiosGet(parameterURL);
};

// --------------update helpfulness for review------------

var putReviewHelpful = (review_id) => {
  let parameterURL = `${serverUrl}/reviews/${review_id}/helpful`;

  return axiosPut(parameterURL);
};

var putReviewReport = (review_id) => {
  let parameterURL = `${serverUrl}/reviews/${review_id}/report`;
  return axiosPut(parameterURL);
};
//--------------- API Products By ID ----------------
var productsByID = (product_id) => {
  let parameterURL = `${serverUrl}/products/${product_id}`;

  return axiosGet(parameterURL);
};

// ------------- API Related Product IDs (array) --------------- returns array of related product IDs

// ------------- API Related Products ---------------
var relatedProducts = (product_id) => {
  let relatedEndpoint = `${serverUrl}/products/${product_id}/related`;

  return axiosGet(relatedEndpoint);
};

// ----------- API Product Styles -------------------------
var productStyles = (product_id) => {
  let stylesEndpoint = `${serverUrl}/products/${product_id}/styles`;

  return axiosGet(stylesEndpoint);
};

// -------------- API ClickEvent ---------------------
var applicationClick = (body) => {
  let parameterURL = `${serverUrl}/interactions`;

  return axiosPost(parameterURL, body);
}
//Will need to add CART API get later on...

export {
  listQuestions,
  listProducts,
  listReviews,
  metaReviews,
  putReviewHelpful,
  putReviewReport,
  relatedProducts,
  productStyles,
  selectedProduct,
  productsByID,
  postQuestions,
  postAnswers,
  putQuesHelpful,
  putAnsHelpful,
  putAnsReport,
  applicationClick,
};

import { API_KEY, CAMPUS_CODE } from "../config.js";
import axios from "axios";

const serverUrl = `https://app-hrsei-api.herokuapp.com/api/fec2/${CAMPUS_CODE}`;

var axiosGet = (url) => {
  let options = {
    headers: { Authorization: API_KEY },
    method: "GET",
    url: url,
    contentType: "json",
  };

  //Can chain more promises to the API call if you want to set state after invocation
  //Don't change the setup here because it will affect other API calls.
  return axios(options)
    .then((data) => {
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
    data: JSON.stringify(data),
  };

  //Can chain more promises to the API call if you want to set state after invocation
  //Don't change the setup here because it will affect other API calls.
  return axios(options)
    .then((data) => {
      console.log("Data posted", data);
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

  let parameterURL = `${serverUrl}/products`;

  return axiosGet(parameterURL);
};

var selectedProduct = (productId, count, page) => {
  let parameterURL = `${serverUrl}/products?product_id=${productId}`;

  return axiosGet(parameterURL);
}

var postQuestions = () => {
  let parameterURL = `${serverUrl}/products?product_id=${productId}`;

  return axiosPost(parameterURL);
}

//--------------- API Reviews -----------------
var listReviews = (productId, page, count) => {
  //Might not need the count and page parameters yet...
  //if needed, adjust the parameterURL to include these
  let parameterURL = `${serverUrl}/reviews/?product_id=${productId}&count=${count}&page=${page}`;

  return axiosGet(parameterURL);
};

//--------------API Reviews Meta Data--------------
var metaReviews = (productId) => {
  let parameterURL = `${serverUrl}/reviews/meta?product_id=${productId}`;
  return axiosGet(parameterURL);
};

// ------------- API Related Products ---------------
var relatedProducts = (product_id) => {
  let relatedEndpoint = `${serverUrl}/products/${product_id}/related`;

  return axiosGet(relatedEndpoint);
};

// ----------- API Product Styles -------------------------
var productStyles = (product_id) => {
  let stylesEndpoint = `${serverUrl}/products/${product_id}/styles`;
  return axiosGet(stylesEndpoint);
}

//Will need to add CART API get later on...

export { listQuestions, listProducts, listReviews, metaReviews,relatedProducts, productStyles, selectedProduct };


import { API_KEY, CAMPUS_CODE } from "../config.js";
import axios from "axios";

const serverUrl = `https://app-hrsei-api.herokuapp.com/api/fec2/${CAMPUS_CODE}`;

var axiosGet = (url) => {
  let options = {
    headers: { Authorization: API_KEY },
    method: "GET",
    url: url,
    data: "json",
  };

  //Can chain more promises to the API call if you want to set state after invocation
  //Don't change the setup here because it will affect other API calls.
  return axios(options)
    .then((data) => {
      console.log("Data received", data);
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
  let parameterURL = `${serverUrl}/products`;

  return axiosGet(parameterURL);
};

//--------------- API Reviews -----------------
var listReviews = (productId, count, page) => {
  //Might not need the count and page parameters yet...
  //if needed, adjust the parameterURL to include these
  let parameterURL = `${serverUrl}/reviews/?product_id=${productId}`;

  return axiosGet(parameterURL);
};

<<<<<<< HEAD
//----------------API Styles -------------------
var listStyles = (product_id, count, page) => {
  let parameterURL = `${serverUrl}/products/:product_id=${product_id}/styles`
  return axiosGet(paramterURL);
}


//Will need to add CART API get later on...
=======
// ------------- API Related Products ---------------
var relatedProducts = (product_id) => {
  let relatedEndpoint = `${serverUrl}/products/${product_id}/related`;
>>>>>>> master

  return axiosGet(relatedEndpoint);
};

//Will need to add CART API get later on...

<<<<<<< HEAD
export {listQuestions, listProducts, listReviews, listStyles};
=======
export { listQuestions, listProducts, listReviews, relatedProducts };
>>>>>>> master

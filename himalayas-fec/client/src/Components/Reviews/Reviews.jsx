import React from "react";
import Axios from "axios";
import { atom, useRecoilState, selector, useRecoilValue } from "recoil";
import { listReviews } from "../../lib/searchAPI.js";
import SingleReview from "./SingleReview.jsx";
import { productReviewsSelector } from "../../lib/Atoms.jsx";

var Reviews = () => {
  const specifiedReviewID = useRecoilValue(productReviewsSelector);
  console.log("😀", specifiedReviewID);
  return (
    <>
      <h4>RATINGS & REVIEWS</h4>
      <p>reviews, sorted by relevance</p>
      <SingleReview specifiedReviewID={specifiedReviewID} />
    </>
  );
};

export default Reviews;

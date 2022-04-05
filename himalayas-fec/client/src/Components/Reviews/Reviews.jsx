import React from "react";
import { atom, useRecoilState, selector, useRecoilValue } from "recoil";
import { listReviews, metaReviews } from "../../lib/searchAPI.js";
import SingleReview from "./SingleReview.jsx";
import { productReviewsSelector } from "../../lib/Atoms.jsx";
import Ratings from "./Ratings.jsx";

var Reviews = () => {
  return (
    <>
      <h4>RATINGS & REVIEWS</h4>
      <p>reviews, sorted by relevance</p>
      <Ratings />
      <SingleReview />
    </>
  );
};

export default Reviews;

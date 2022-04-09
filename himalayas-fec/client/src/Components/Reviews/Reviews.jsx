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
      <label for="sort-review"> sorted by </label>
      <select name="sort-review" id="sort-review">
        <option value="Helpful">Helpful</option>
        <option value="Newest">Newest</option>
        <option value="Relevant">Relevant</option>
      </select>
      <Ratings />
      <SingleReview />
    </>
  );
};

export default Reviews;

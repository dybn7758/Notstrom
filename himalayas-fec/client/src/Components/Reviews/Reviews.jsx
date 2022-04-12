import React from "react";
import { atom, useRecoilState, selector, useRecoilValue } from "recoil";
import {
  listReviews,
  metaReviews,
  putReviewHelpful,
} from "../../lib/searchAPI.js";
import SingleReview from "./SingleReview.jsx";
import {
  productReviewsSelector,
  productMetaReviewsSelector,
  sortParam,
} from "../../lib/Atoms.jsx";
import Ratings from "./Ratings.jsx";

var Reviews = () => {
  //----------------------for ratings-----------------
  const specifiedRatings = useRecoilValue(productMetaReviewsSelector);
  console.log("🎃", specifiedRatings);
  console.log("🤩", specifiedRatings.ratings);
  console.log(Object.keys(specifiedRatings.characteristics));
  console.log(Object.values(specifiedRatings.characteristics));
  const recommended = Number(specifiedRatings.recommended.true || 0);
  // recommend part
  const notRecommended = Number(specifiedRatings.recommended.false || 0);
  const sum = recommended + notRecommended;
  console.log(recommended, notRecommended, sum);
  // total rating part
  const convertRatings = Object.values(specifiedRatings.ratings).map(
    (rating) => {
      return Number(rating);
    }
  );
  const totalRatingScores = convertRatings
    .map((rating, i) => {
      return rating * (i + 1);
    })
    .reduce((a, b) => a + b, 0);

  console.log(convertRatings, totalRatingScores);

  // -------------for single review--------------
  const specifiedReviewID = useRecoilValue(productReviewsSelector);
  console.log("😀 two reviews", specifiedReviewID);

  const [initSortParam, setInitSortParam] = useRecoilState(sortParam);
  const handleDropdown = (e) => {
    console.log("dropdown 🥶", e.target.value);
    setInitSortParam(e.target.value);
  };

  return (
    <div className="grid-container ratings-reviews" id="reviews-module">
      <div className="grid-child ratings">
        <Ratings
          specifiedRatings={specifiedRatings}
          totalRatingScores={totalRatingScores}
          sum={sum}
          recommended={recommended}
          notRecommended={notRecommended}
        />
      </div>
      <div className="grid-child reviews">
        <label htmlFor="sort-review"> sorted by </label>
        <select name="sort-review" id="sort-review" onChange={handleDropdown}>
          <option value="helpful">Helpful</option>
          <option value="newest">Newest</option>
          <option value="relevant">Relevant</option>
        </select>
        <SingleReview
          characteristics={Object.keys(specifiedRatings.characteristics)}
          specifiedReviewID={specifiedReviewID}
          product_id={specifiedRatings.product_id}
        />
      </div>
    </div>
  );
};

export default Reviews;

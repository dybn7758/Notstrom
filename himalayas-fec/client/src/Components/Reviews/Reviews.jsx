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
  ratingSelector,
  filterReview,
} from "../../lib/Atoms.jsx";
import Ratings from "./Ratings.jsx";

var Reviews = () => {
  // -------------for single review--------------
  const specifiedReviewID = useRecoilValue(productReviewsSelector);

  //----------------------for ratings-----------------
  const specifiedRatings = useRecoilValue(productMetaReviewsSelector);
  // ---------------------for filter rating------------------
  const rating = useRecoilValue(ratingSelector);
  const filter = useRecoilValue(filterReview);

  const filterReviews = (rating) => {
    return specifiedReviewID.filter((review) => {
      return Number(review.rating) === Number(rating);
    });
  };

  const recommended = Number(specifiedRatings.recommended.true || 0);
  const notRecommended = Number(specifiedRatings.recommended.false || 0);
  const sum = recommended + notRecommended;
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

  const [initSortParam, setInitSortParam] = useRecoilState(sortParam);
  const handleDropdown = (e) => {
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
        <div className="sort-review">
          <label htmlFor="sort-review">
            {specifiedReviewID.length} reviews, sorted by{" "}
          </label>
          <select name="sort-review" id="sort-review" onChange={handleDropdown}>
            <option value="helpful">Helpful</option>
            <option value="newest">Newest</option>
            <option value="relevant">Relevant</option>
          </select>
        </div>
        <SingleReview
          characteristics={Object.keys(specifiedRatings.characteristics)}
          specifiedReviewID={filter ? filterReviews(rating) : specifiedReviewID}
          product_id={specifiedRatings.product_id}
        />
      </div>
    </div>
  );
};

export default Reviews;

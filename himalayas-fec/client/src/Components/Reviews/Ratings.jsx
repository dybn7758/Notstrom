import React from "react";
import { atom, useRecoilState, selector, useRecoilValue } from "recoil";
import { listReviews, metaReviews } from "../../lib/searchAPI.js";
import {
  productReviewsSelector,
  productMetaReviewsSelector,
} from "../../lib/Atoms.jsx";

var Ratings = () => {
  const specifiedRatings = useRecoilValue(productMetaReviewsSelector);
  console.log("🎃", specifiedRatings);
  console.log(Object.keys(specifiedRatings.characteristics));
  console.log(Object.values(specifiedRatings.characteristics));
  const recommended = Number(specifiedRatings.recommended.true);
  // recommend part
  const notRecommended = Number(specifiedRatings.recommended.false);
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

  const totalNumberOfRatings = convertRatings.reduce((a, b) => a + b, 0);

  console.log(convertRatings, totalRatingScores, totalNumberOfRatings);

  return (
    <div>
      <h3>Placeholder for ratings</h3>
      <h1>
        {(totalRatingScores / totalNumberOfRatings).toFixed(1)}❤️ out of{" "}
        {totalNumberOfRatings} reviews
      </h1>
      <>
        {Math.round((recommended / sum) * 100)} % of reviews recommend this
        product
      </>
      <>
        {Object.keys(specifiedRatings.ratings).map((key, i) => {
          return (
            <p key={i}>
              {key} stars ⭐︎: {specifiedRatings.ratings[key]}
            </p>
          );
        })}
      </>
      <>
        {Object.keys(specifiedRatings.characteristics).map((key) => {
          return (
            <p key={specifiedRatings.characteristics[key].id}>
              {key}:{specifiedRatings.characteristics[key].value}
            </p>
          );
        })}
      </>
      <hr></hr>
    </div>
  );
};

export default Ratings;

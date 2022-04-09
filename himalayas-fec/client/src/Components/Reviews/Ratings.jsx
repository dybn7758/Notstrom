import React from "react";
import { atom, useRecoilState, selector, useRecoilValue } from "recoil";
import { listReviews, metaReviews } from "../../lib/searchAPI.js";
import QuartersStars from "./QuartersStars.jsx";
import Bars from "./Bars.jsx";
import Characteristics from "./Characteristics.jsx";

import {
  productReviewsSelector,
  productMetaReviewsSelector,
} from "../../lib/Atoms.jsx";

var Ratings = () => {
  const specifiedRatings = useRecoilValue(productMetaReviewsSelector);
  console.log("🎃", specifiedRatings);
  console.log("🤩", specifiedRatings.ratings);
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

  // const totalNumberOfRatings = convertRatings.reduce((a, b) => a + b, 0);

  console.log(convertRatings, totalRatingScores);

  return (
    <div>
      <h3>Placeholder for ratings</h3>
      <h1>
        {(totalRatingScores / sum).toFixed(1)} out of {sum} reviews
        <QuartersStars rating={(totalRatingScores / sum).toFixed(1)} />
      </h1>
      <>
        {Math.round((recommended / sum) * 100)} % of reviews recommend this
        product
      </>
      <>
        {/* {Object.keys(specifiedRatings.ratings).map((key, i) => {
          return (
            <p key={i}>
              {key} stars ⭐︎: {specifiedRatings.ratings[key]}
            </p>
          );
        })} */}
        <Bars ratings={specifiedRatings.ratings} sum={sum} />
      </>
      <>
        {Object.keys(specifiedRatings.characteristics).map((key) => {
          return (
            <p key={specifiedRatings.characteristics[key].id}>
              {key}:{specifiedRatings.characteristics[key].value}
            </p>
          );
        })}
        <Characteristics />
      </>
      <hr></hr>
    </div>
  );
};

export default Ratings;

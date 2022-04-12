import React from "react";
import { atom, useRecoilState, selector, useRecoilValue } from "recoil";
import QuartersStars from "./QuartersStars.jsx";
import Bars from "./Bars.jsx";
import Characteristics from "./Characteristics.jsx";

var Ratings = ({
  specifiedRatings,
  totalRatingScores,
  sum,
  recommended,
  notRecommended,
}) => {
  return (
    <div>
      <h4>RATINGS & REVIEWS</h4>
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
    </div>
  );
};

export default Ratings;

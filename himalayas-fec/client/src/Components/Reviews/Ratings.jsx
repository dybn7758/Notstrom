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
      <h3>RATINGS & REVIEWS</h3>
      <h1>
        {totalRatingScores
          ? (totalRatingScores / sum).toFixed(1) + "/5"
          : "No Rating Available"}

        <QuartersStars rating={(totalRatingScores / sum).toFixed(1)} />
      </h1>
      <>
        {Math.round((recommended / sum) * 100)} % of reviews recommend this
        product
      </>
      <>
        <Bars ratings={specifiedRatings.ratings} sum={sum} />
      </>
      <>
        <Characteristics characteristics={specifiedRatings.characteristics} />
      </>
    </div>
  );
};

export default Ratings;

import React, {useState} from 'react';
import { priceVal, productResponse, categoryResponse, productMetaReviewsSelector } from '../../lib/Atoms.jsx';
import {productQ} from '../../App.jsx';
import Cart from './Cart.jsx'
import QuartersStars from '../Reviews/QuartersStars.jsx'
import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

const Rating = () => {

  const specifiedRatings = useRecoilValue(productMetaReviewsSelector);
  const recommended = Number(specifiedRatings.recommended.true || 0);
  // recommend part
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

  return (
    <h1>
      <QuartersStars rating={(totalRatingScores / sum).toFixed(1)} />
    </h1>
  )

};

export default Rating
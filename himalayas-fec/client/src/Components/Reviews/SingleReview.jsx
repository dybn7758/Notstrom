import React from "react";
import { atom, useRecoilState, selector, useRecoilValue } from "recoil";
import { listReviews, metaReviews } from "../../lib/searchAPI.js";
import {
  productReviewsSelector,
  productMetaReviewsSelector,
} from "../../lib/Atoms.jsx";

var SingleReview = () => {
  const specifiedReviewID = useRecoilValue(productReviewsSelector);
  console.log("😀 two reviews", specifiedReviewID);

  return (
    <>
      {specifiedReviewID.map((review) => {
        return (
          <div key={review.review_id}>
            <p>date:{review.date}</p>
            <p>rating:{review.rating}⭐︎</p>
            <p>summary🙃:{review.summary}</p>
            <p>body👉: {review.body}</p>
            <p>recommend👍:{review.recommend}</p>
            <p>help: {review.helpfulness}</p>
            <p>
              photos:
              {review.photos.map((photo) => {
                return (
                  <img
                    key={photo.id}
                    src={photo.url}
                    width="150px"
                    height="200px"
                  ></img>
                );
              })}
            </p>
            <hr></hr>
          </div>
        );
      })}
      <button type="submit">MORE REVIEWS</button>
    </>
  );
};

export default SingleReview;

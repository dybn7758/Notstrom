import React from "react";
import Stars from "simple-rating-stars";
import { atom, useRecoilState, selector, useRecoilValue } from "recoil";
import { listReviews, metaReviews } from "../../lib/searchAPI.js";
import {
  productReviewsSelector,
  productMetaReviewsSelector,
  twoMore,
} from "../../lib/Atoms.jsx";

var SingleReview = () => {
  const specifiedReviewID = useRecoilValue(productReviewsSelector);
  console.log("😀 two reviews", specifiedReviewID);
  const [addTwoMoreReviews, setAddTwoMoreReviews] = useRecoilState(twoMore);
  const addTwoMore = () => {
    setAddTwoMoreReviews(addTwoMoreReviews + 2);
  };

  return (
    <>
      {specifiedReviewID.map((review) => {
        return (
          <div key={review.review_id}>
            <Stars
              stars={review.rating}
              outOf={5}
              full={"#ebc634"}
              empty={"#ffffff"}
              stroke={"#000000"}
            />
            <p>date:{review.date}</p>

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
      <button type="submit" onClick={addTwoMore}>
        MORE REVIEWS
      </button>
    </>
  );
};

export default SingleReview;

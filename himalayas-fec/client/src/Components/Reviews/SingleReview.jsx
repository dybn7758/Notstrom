import React from "react";
import moment from "moment";
import Stars from "simple-rating-stars";
import { atom, useRecoilState, selector, useRecoilValue } from "recoil";
import { putReviewHelpful, putReviewReport } from "../../lib/searchAPI.js";
import WriteReview from "./WriteReview.jsx";
import { showWriteReviewModal, reviewsCount } from "../../lib/Atoms.jsx";

var SingleReview = ({ characteristics, specifiedReviewID, product_id }) => {
  const [showWriteReview, setShowWriteReview] =
    useRecoilState(showWriteReviewModal);
  const [initReview, setReviewsCount] = useRecoilState(reviewsCount);

  const showMoreReviews = () => {
    setReviewsCount(initReview + 2);
  };

  const showModal = () => {
    setShowWriteReview(true);
  };

  const hideModal = () => {
    setShowWriteReview(false);
  };

  return (
    <div className="scrollable-div singlereview">
      {specifiedReviewID.slice(0, initReview).map((review) => {
        return (
          <div key={review.review_id}>
            <div className="grid-container singereview header">
              <div className="grid-child star">
                <Stars
                  stars={review.rating}
                  outOf={5}
                  full={"#ebc634"}
                  empty={"#ffffff"}
                  stroke={"#000000"}
                />
              </div>
              <span className="grid-child user_id date">
                {review.reviewer_name},{" "}
                {moment(review.date).format("MMM Do, YYYY")}
              </span>
            </div>
            <h3>{review.summary}</h3>
            <p>{review.body}</p>
            <p>{review.recommend && "I recommend this product"}</p>
            <span className="helpfulness">helpful?</span>
            <span
              className="yes-no"
              id={review.review_id}
              onClick={(e) => {
                putReviewHelpful(e.target.id);
              }}
            >
              {" "}
              yes ( {review.helpfulness} ){" "}
            </span>{" "}
            |
            <span
              id={review.review_id}
              className="report"
              onClick={(e) => {
                putReviewReport(e.target.id);
              }}
            >
              report{" "}
            </span>
            <p>
              {review.photos.map((photo) => {
                return (
                  <img
                    className="reviewphoto"
                    key={photo.id}
                    src={photo.url}
                  ></img>
                );
              })}
            </p>
            <hr></hr>
          </div>
        );
      })}
      <button className="post-q" type="submit" onClick={showMoreReviews}>
        MORE REVIEWS
      </button>
      <button className="post-q" type="submit" onClick={showModal}>
        ADD A REVIEW
      </button>
      {showWriteReview && (
        <WriteReview
          hideModal={hideModal}
          characteristics={characteristics}
          product_id={product_id}
        />
      )}
    </div>
  );
};

export default SingleReview;

import React from "react";

// class SingleReview extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     const { reviews } = this.props;
//     return (
//       <>
//         {reviews.map((review) => {
//           return (
//             <div key={review.review_id}>
//               <p>{review.rating}</p>
//               <p>{review.summary}</p>
//             </div>
//           );
//         })}
//       </>
//     );
//   }
// }
var SingleReview = ({ specifiedReviewID }) => {
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
            <p>
              {review.photos.map((photo) => {
                <img src={photo.url}></img>;
              })}
            </p>
            <hr></hr>
          </div>
        );
      })}
    </>
  );
};

export default SingleReview;

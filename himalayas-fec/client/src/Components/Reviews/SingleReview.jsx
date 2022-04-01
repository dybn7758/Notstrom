import React from "react";

class SingleReview extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { reviews } = this.props;
    return (
      <>
        {reviews.map((review) => {
          return (
            <div key={review.review_id}>
              <p>{review.rating}</p>
              <p>{review.summary}</p>
            </div>
          );
        })}
      </>
    );
  }
}

export default SingleReview;

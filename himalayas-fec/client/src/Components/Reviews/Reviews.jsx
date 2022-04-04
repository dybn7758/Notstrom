import React from "react";
import Axios from "axios";
import { listReviews } from "../../lib/searchAPI.js";
import SingleReview from "./SingleReview.jsx";

class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product_id: "37311",
      count: "",
      reviews: [],
    };
    this.getAllReviews = this.getAllReviews.bind(this);
  }
  getAllReviews() {
    const { product_id } = this.state;
    const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews?product_id=${product_id}`;
    const key = "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";
    const config = { headers: { Authorization: key } };
    Axios.get(url, config)
      .then((response) => {
        console.log(response.data);
        this.setState({
          count: response.data.count,
          reviews: response.data.results,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.getAllReviews();
  }

  render() {
    const { count, reviews } = this.state;
    return (
      <>
        <h4>RATINGS & REVIEWS</h4>
        <p>{count} reviews, sorted by relevance</p>
        <SingleReview reviews={reviews} />
      </>
    );
  }
}

export default Reviews;

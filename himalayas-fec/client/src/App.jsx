import React from "react";
import RelatedProducts from "./Components/Related Products/RelatedProducts.jsx";
import Reviews from "./Components/Reviews/Reviews.jsx";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {" "}
        Himalayas For The Win
        <RelatedProducts />
        <Reviews />
      </div>
    );
  }
}

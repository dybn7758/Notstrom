import React from "react";
import SearchQA from "./searchQA.jsx";

export default class QA extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="questions-answers">
        Questions & Answers
        <SearchQA />
      </div>
    );
  }
}

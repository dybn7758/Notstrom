import React from "react";
import { atom, useRecoilState, selector, useRecoilValue } from "recoil";
import { ratingSelector, filterReview } from "../../lib/Atoms.jsx";
function Bars({ ratings, sum }) {
  // const initRating = useRecoilValue(ratingSelector);
  const [rating, setRating] = useRecoilState(ratingSelector);
  const [filter, setFilter] = useRecoilState(filterReview);

  const handleRatingSelector = (e) => {
    console.log(e.target.id);
    setRating(e.target.id);
    setFilter(true);
  };
  return (
    <div className="skill-bars">
      {[1, 2, 3, 4, 5].map((key, i) => {
        const width = (ratings[key] / sum) * 100;
        return (
          <div className="bar" key={i}>
            <div className="info">
              <span>{key} stars</span>
            </div>
            <div
              className="progress-line"
              id={key}
              onClick={handleRatingSelector}
            >
              <span
                style={{
                  width: width + "%",
                }}
              ></span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Bars;

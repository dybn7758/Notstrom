import React from "react";
function Bars({ ratings, sum }) {
  return (
    <div class="skill-bars">
      {Object.keys(ratings).map((key, i) => {
        return (
          <div className="bar" key={i}>
            <div className="info">
              <span>{key} stars</span>
            </div>
            <div className="progress-line">
              <span
                style={{
                  width: ((ratings[key] * 1) / sum) * 1000,
                }}
              ></span>
            </div>
          </div>
        );
      })}
      <hr></hr>
    </div>
  );
}

export default Bars;

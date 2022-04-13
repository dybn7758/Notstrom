import React from "react";
function Bars({ ratings, sum }) {
  return (
    <div className="skill-bars">
      {Object.keys(ratings).map((key, i) => {
        const width = (ratings[key] / sum) * 100;
        // console.log("🤩", width + "%");
        return (
          <div className="bar" key={i}>
            <div className="info">
              <span>{key} stars</span>
            </div>
            <div className="progress-line">
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

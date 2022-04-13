import React from "react";

function Characteristics({ characteristics }) {
  const scales = {
    Size: ["Too small", "Perfect", "Too large"],
    Comfort: ["Poor", "Ok", "Perfect"],
  };
  return (
    <div className="container">
      {Object.keys(characteristics).map((characteristic, i) => {
        const left = ((characteristics[characteristic].value * 1) / 5) * 100;
        const adjusted = left - 1;

        return (
          <form action="#" key={characteristics[characteristic].id}>
            <span className="text">{characteristic}</span>
            <div className="indicator">
              <div className="arrow" style={{ left: adjusted + "%" }}></div>
              <span className="weak"></span>
              <span className="medium"></span>
              <span className="strong"></span>
            </div>
          </form>
        );
      })}
    </div>
  );
}

export default Characteristics;

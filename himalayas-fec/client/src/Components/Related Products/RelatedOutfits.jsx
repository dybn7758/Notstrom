import React from "react";
import { ArrowBackCircle } from "react-ionicons";
import { ArrowForwardCircle } from "react-ionicons";

const RelatedOutfits = () => {
  return (
    <div
      style={{
        width: 1000,
        height: 350,
        background: "lightblue",
        padding: 5,
        overflow: "hidden",
      }}
    >
      <ArrowBackCircle
        style={{ position: "relative", top: "50%", left: "5%" }}
        onClick={() => {
          console.log("this");
        }}
      />
      <ArrowForwardCircle
        style={{ position: "relative", top: "50%", right: "50%" }}
        onClick={() => {
          console.log("that");
        }}
      />
    </div>
  );
};

export default RelatedOutfits;

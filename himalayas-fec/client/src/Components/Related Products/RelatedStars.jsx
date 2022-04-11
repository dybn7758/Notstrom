import React from "react";
import "../../../dist/index.scss";
import {stylesAndProducts} from '../../lib/Atoms.jsx';
import {useRecoilValue, useRecoilState} from 'recoil';


const RelatedStars = (props) => {
  const [stylesAndProductsValue, setStylesAndProducts] = useRecoilState(stylesAndProducts);



  const reviews = stylesAndProductsValue[props.props1].data.results;
  let totalScore = 0;

  for (var x = 0; x < reviews.length; x++) {
    totalScore += reviews[x].rating;
  }



  let rating = (totalScore / reviews.length) || 0;
  let stars = [];

  while (stars.length < 5) {
    if (rating > 1) {
      stars.push(1);
    } else if (rating > 0) {
      let empty = Math.abs(0 - rating);
      let quart = Math.abs(0.25 - rating);
      let half = Math.abs(0.5 - rating);
      let three = Math.abs(0.75 - rating);
      let full = Math.abs(1 - rating);
      let closest = Math.min(empty, quart, half, three, full);
      switch (closest) {
        case empty:
          stars.push(0);
          break;
        case quart:
          stars.push(0.28);
          break;
        case half:
          stars.push(0.5);
          break;
        case three:
          stars.push(0.72);
          break;
        case full:
          stars.push(1.0);
          break;
        default:
          console.log("OOPS");
          stars.push(0);
          break;
      }
    } else {
      stars.push(0);
    }
    rating = rating - 1;
  }
  return (
    <div>
      {stars.map((item, i) => {
        return (
          <div className="single-star-container" key={i}>
            <div
              className="single-star-fill"
              style={{ width: `${parseInt(item * 31)}px` }}
            >
              <img
                className="single-star-outline"
                src="star.png"
                alt="stars alt"
              ></img>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RelatedStars;

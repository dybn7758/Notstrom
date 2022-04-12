import React, { useState } from "react";
import DynamicStars from "./DynamicStars.jsx";

function WriteReview({ hideModal, characteristics, product_id }) {
  const [recommend, setRecommend] = useState("");
  const [size, setSize] = useState("");
  const [width, setWidth] = useState("");
  const [comfort, setComfort] = useState("");
  const [quality, setQuality] = useState("");
  const [length, setLength] = useState("");
  const [fit, setFit] = useState("");
  const [reviewSum, setReviewSum] = useState("");
  const [review, setReview] = useState("");
  const [nickname, setNickName] = useState("");
  const [email, setEmail] = useState("");

  const handleSelectionId = (e) => {
    console.log(e.target);
    setRecommend(e.target.id);
  };
  const handleSelectionValue = (e) => {
    console.log(e.target);
    if (e.target.id.includes("size")) {
      console.log("😵‍💫", e.target.id.includes("size"));
      setSize(e.target.value);
    }
    if (e.target.id.includes("width")) {
      setWidth(e.target.value);
    }
    if (e.target.id.includes("comfort")) {
      setComfort(e.target.value);
    }

    if (e.target.id.includes("quality")) {
      setQuality(e.target.value);
    }

    if (e.target.id.includes("fit")) {
      setFit(e.target.vlaue);
    }

    if (e.target.id.includes("length")) {
      setLength(e.target.value);
    }
  };

  const handleInput = (e) => {
    console.log(e.target.value);
    if (e.target.id === "reviewSum") {
      setReviewSum(e.target.value);
    }
    if (e.target.id === "review") {
      setReview(e.target.value);
    }

    if (e.target.id === "nickname") {
      setNickName(e.target.value);
    }

    if (e.target.id === "email") {
      setEmail(e.target.value);
    }
  };

  const uploadImg = (files) => {
    console.log("🚶🏼", files);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Add your review</h4>
        </div>
        <div className="modal-body">
          <form className="scrollable-div">
            <DynamicStars />
            <div onChange={handleSelectionId} required>
              <h3>Do you recommend this product?</h3>
              <input type="radio" id="Yes"></input>
              <label for="Yes"> Yes </label>
              <input type="radio" id="No"></input>
              <label for="No"> No </label>
            </div>
            <div required>
              <h3>How do they fit?</h3>
              {characteristics.map((characteristic, i) => {
                if (characteristic === "Size") {
                  console.log(characteristic);
                  return (
                    <div key={characteristic} onChange={handleSelectionValue}>
                      <b>Size: </b>
                      <input type="radio" id="size1" value="1"></input>
                      <label for="size1"> A size too small </label>
                      <input type="radio" id="size2" value="2"></input>
                      <label for="size2"> 1/2 a size too small </label>
                      <input type="radio" id="size3" value="3"></input>
                      <label for="size3"> Perfect </label>
                      <input type="radio" id="size4" value="4"></input>
                      <label for="size4"> 1/2 a size too long </label>
                      <input type="radio" id="size5" value="5"></input>
                      <label for="size5"> A size too wide </label>
                    </div>
                  );
                } else if (characteristic === "Width") {
                  console.log(characteristic);
                  return (
                    <div key={characteristic} onChange={handleSelectionValue}>
                      <b>Width: </b>
                      <input type="radio" id="width1" value="1"></input>
                      <label for="width1"> Too narrow </label>
                      <input type="radio" id="width2" value="2"></input>
                      <label for="width2"> Slightly narrow </label>
                      <input type="radio" id="width3" value="3"></input>
                      <label for="width3"> Perfect </label>
                      <input type="radio" id="width4" value="4"></input>
                      <label for="width4"> Slightly wide </label>
                      <input type="radio" id="width5" value="5"></input>
                      <label for="width5"> Too wide </label>
                    </div>
                  );
                } else if (characteristic === "Comfort") {
                  console.log(characteristic);
                  return (
                    <div key={characteristic} onChange={handleSelectionValue}>
                      <b>Comfort: </b>
                      <input type="radio" id="comfort1" value="1"></input>
                      <label for="comfort1"> Uncomfortable </label>
                      <input type="radio" id="comfort2" value="2"></input>
                      <label for="comfort2"> Slightly uncomfortable </label>
                      <input type="radio" id="comfort3" value="3"></input>
                      <label for="comfort3"> Ok </label>
                      <input type="radio" id="comfort4" value="4"></input>
                      <label for="comfort4"> Comfort </label>
                      <input type="radio" id="comfort5" value="5"></input>
                      <label for="comfort5"> Perfect </label>
                    </div>
                  );
                } else if (characteristic === "Quality") {
                  console.log(characteristic);
                  return (
                    <div key={characteristic} onChange={handleSelectionValue}>
                      <b>Quality: </b>
                      <input type="radio" id="quality1" value="1"></input>
                      <label for="quality1"> Poor </label>
                      <input type="radio" id="quality2" value="2"></input>
                      <label for="quality2"> Below average </label>
                      <input type="radio" id="quality3" value="3"></input>
                      <label for="quality3"> What I expected </label>
                      <input type="radio" id="quality4" value="4"></input>
                      <label for="quality4"> Pretty great </label>
                      <input type="radio" id="quality5" value="5"></input>
                      <label for="quality5"> Perfect </label>
                    </div>
                  );
                } else if (characteristic === "Length") {
                  console.log(characteristic);
                  return (
                    <div key={characteristic} onChange={handleSelectionValue}>
                      <b>Length: </b>
                      <input type="radio" id="length1" value="1"></input>
                      <label for="length1"> Runs Short </label>
                      <input type="radio" id="length2" value="2"></input>
                      <label for="length2"> Runs slightly short </label>
                      <input type="radio" id="length3" value="3"></input>
                      <label for="length3"> Perfect </label>
                      <input type="radio" id="length4" value="4"></input>
                      <label for="length4"> Runs slightly long </label>
                      <input type="radio" id="length5" value="5"></input>
                      <label for="length5"> Runs long </label>
                    </div>
                  );
                } else if (characteristic === "Fit") {
                  console.log(characteristic);
                  return (
                    <div key={characteristic} onChange={handleSelectionValue}>
                      <b>Fit: </b>
                      <input type="radio" id="fit1" value="1"></input>
                      <label for="fit1"> Runs tight </label>
                      <input type="radio" id="fit2" value="2"></input>
                      <label for="fit2"> Runs slightly tight </label>
                      <input type="radio" id="fit3" value="3"></input>
                      <label for="fit3"> Perfect </label>
                      <input type="radio" id="fit4" value="4"></input>
                      <label for="fit4"> Runs slightly long </label>
                      <input type="radio" id="fit5" value="5"></input>
                      <label for="fit5"> Runs long </label>
                    </div>
                  );
                }
              })}
            </div>
            <div required>
              <b>Review summary: </b>
              <br></br>
              <textarea
                id="reviewSum"
                rows="1"
                cols="60"
                wrap="soft"
                type="text"
                maxLength="60"
                placeholder="Example: Best purchase ever!"
                onChange={handleInput}
              ></textarea>
              <br></br>
            </div>
            <b>Review Body:</b>
            <br></br>
            <textarea
              id="review"
              rows="10"
              cols="60"
              wrap="soft"
              type="text"
              minLength="50"
              maxLength="1000"
              placeholder="Why did you like the product or not?"
              onChange={handleInput}
            ></textarea>
            <input
              type="file"
              id="myFile"
              name="filename"
              multiple
              onChange={(e) => {
                uploadImg(e.target.files);
              }}
            ></input>
            <div>
              <b>Nickname:</b>
              <br></br>
              <textarea
                id="nickname"
                rows="1"
                cols="60"
                type="text"
                placeholder="Example: jackson11!"
                maxLength="1000"
                required
                onChange={handleInput}
              ></textarea>
            </div>
            -For privacy reasons, do not use your full name or email address.
            <div>
              <h3>Email:</h3>
              <input
                id="email"
                rows="1"
                cols="60"
                type="email"
                pattern="email"
                placeholder="Example: jackson11@email.com"
                maxLength="60"
                required
                onChange={handleInput}
              ></input>
              <br></br> -For authentication reasons, you will not be emailed.
            </div>
          </form>
        </div>
        <div>
          <button className="post-q">submit</button>
          <button className="post-q" onClick={hideModal}>
            close
          </button>
        </div>
      </div>
    </div>
  );
}

export default WriteReview;

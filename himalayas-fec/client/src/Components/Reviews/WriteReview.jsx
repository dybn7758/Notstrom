import React from "react";
import DynamicStars from "./DynamicStars.jsx";

function WriteReview({ hideModal, characteristics }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Add your review</h4>
        </div>
        <div className="modal-body">
          <DynamicStars />
          <form>
            <p>Do you recommend this product?</p>
            <input type="radio" id="Yes"></input>
            <label for="Yes">Yes</label>
            <input type="radio" id="No"></input>
            <label for="No">No</label>
            <p>How do they fit?</p>
            {characteristics.map((characteristic, i) => {
              if (characteristic === "Size") {
                console.log(characteristic);
                return (
                  <div key={characteristic}>
                    <b>Size:</b>
                    <input type="radio" id="size1" value="1"></input>
                    <label for="size1">A size too small</label>
                    <input type="radio" id="size2" value="2"></input>
                    <label for="size2">1/2 a size too small</label>
                    <input type="radio" id="size3" value="3"></input>
                    <label for="size3">Perfect</label>
                    <input type="radio" id="size4" value="4"></input>
                    <label for="size4">1/2 a size too long</label>
                    <input type="radio" id="size5" value="5"></input>
                    <label for="size5">A size too wide</label>
                  </div>
                );
              } else if (characteristic === "Width") {
                console.log(characteristic);
                return (
                  <div key={characteristic}>
                    <b>Width:</b>
                    <input type="radio" id="width1" value="1"></input>
                    <label for="width1">Too narrow</label>
                    <input type="radio" id="width2" value="2"></input>
                    <label for="width2">Slightly narrow</label>
                    <input type="radio" id="width3" value="3"></input>
                    <label for="width3">Perfect</label>
                    <input type="radio" id="width4" value="4"></input>
                    <label for="width4">Slightly wide</label>
                    <input type="radio" id="width5" value="5"></input>
                    <label for="width5">Too wide</label>
                  </div>
                );
              } else if (characteristic === "Comfort") {
                console.log(characteristic);
                return (
                  <div key={characteristic}>
                    <b>Comfort:</b>
                    <input type="radio" id="comfort1" value="1"></input>
                    <label for="comfort1">Uncomfortable</label>
                    <input type="radio" id="comfort2" value="2"></input>
                    <label for="comfort2">Slightly uncomfortable</label>
                    <input type="radio" id="comfort3" value="3"></input>
                    <label for="comfort3">Ok</label>
                    <input type="radio" id="comfort4" value="4"></input>
                    <label for="comfort4">Comfort</label>
                    <input type="radio" id="comfort5" value="5"></input>
                    <label for="comfort5">Perfect</label>
                  </div>
                );
              } else if (characteristic === "Quality") {
                console.log(characteristic);
                return (
                  <div key={characteristic}>
                    <b>Quality:</b>
                    <input type="radio" id="quality1" value="1"></input>
                    <label for="quality1">Poor</label>
                    <input type="radio" id="quality2" value="2"></input>
                    <label for="quality2">Below average</label>
                    <input type="radio" id="quality3" value="3"></input>
                    <label for="quality3">What I expected</label>
                    <input type="radio" id="quality4" value="4"></input>
                    <label for="quality4">Pretty great</label>
                    <input type="radio" id="quality5" value="5"></input>
                    <label for="quality5">Perfect</label>
                  </div>
                );
              } else if (characteristic === "Length") {
                console.log(characteristic);
                return (
                  <div key={characteristic}>
                    <b>Length:</b>
                    <input type="radio" id="length1" value="1"></input>
                    <label for="length1">Runs Short</label>
                    <input type="radio" id="length2" value="2"></input>
                    <label for="length2">Runs slightly short</label>
                    <input type="radio" id="length3" value="3"></input>
                    <label for="length3">Perfect</label>
                    <input type="radio" id="length4" value="4"></input>
                    <label for="length4">Runs slightly long</label>
                    <input type="radio" id="length5" value="5"></input>
                    <label for="length5">Runs long</label>
                  </div>
                );
              } else if (characteristic === "Fit") {
                console.log(characteristic);
                return (
                  <div key={characteristic}>
                    <b>Fit:</b>
                    <input type="radio" id="fit1" value="1"></input>
                    <label for="fit1">Runs tight</label>
                    <input type="radio" id="fit2" value="2"></input>
                    <label for="fit2">Runs slightly tight</label>
                    <input type="radio" id="fit3" value="3"></input>
                    <label for="fit3">Perfect</label>
                    <input type="radio" id="fit4" value="4"></input>
                    <label for="fit4">Runs slightly long</label>
                    <input type="radio" id="fit5" value="5"></input>
                    <label for="fit5">Runs long</label>
                  </div>
                );
              }
            })}
            <b>Review summary:</b>
            <br></br>
            <textarea
              rows="1"
              cols="60"
              wrap="soft"
              type="text"
              maxlength="60"
              placeholder="Example: Best purchase ever!"
            ></textarea>
            <br></br>
            <b>Review Body:</b>
            <br></br>
            <textarea
              rows="10"
              cols="60"
              wrap="soft"
              type="text"
              minlength="50"
              maxlength="1000"
              placeholder="Why did you like the product or not?"
            ></textarea>
            <button>Pleacholder for photo</button>
            <div>
              <b>Nickname:</b>
              <br></br>
              <textarea
                rows="1"
                cols="60"
                className="body-username"
                type="text"
                placeholder="Example: jackson11!"
                maxLength="1000"
                required
              ></textarea>
            </div>
            -For privacy reasons, do not use your full name or email address.
            <div>
              <b>Email:</b>
              <br></br>
              <input
                rows="1"
                cols="60"
                className="body-email"
                type="email"
                pattern="email"
                placeholder="Example: jackson11@email.com"
                maxLength="60"
                required
              ></input>
              <br></br> -For authentication reasons, you will not be emailed.
            </div>
          </form>
        </div>
        <div>
          <button className="button">submit</button>
          <button className="button" onClick={hideModal}>
            close
          </button>
        </div>
      </div>
    </div>
  );
}

export default WriteReview;

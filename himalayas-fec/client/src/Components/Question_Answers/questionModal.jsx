import React, { useEffect } from "react";
import {
  atom,
  useSetRecoilState,
  useRecoilState,
  selector,
  useRecoilValue,
} from "recoil";
import {
  showQuestionModal,
  limitedQuestions,
  productQuestionsSelector,
  productQ,
  questionModalData,
  selectedProductId,
} from "../../lib/Atoms.jsx";
import { postQuestions } from "../../lib/searchAPI.js";
import "./Styling/Modal.scss";

var QuestionModal = () => {
  let [useQuestionModal, setQuestionModal] = useRecoilState(showQuestionModal);
  let [useProductId, setProductId] = useRecoilState(selectedProductId);
  let productName = useRecoilValue(questionModalData);

  let bodyForm = React.useRef(null);
  let nameForm = React.useRef(null);
  let emailForm = React.useRef(null);

  const onSubmit = () => {
    //perform a post request to the API
    const value1 = bodyForm.current.value;
    const value2 = nameForm.current.value;
    const value3 = emailForm.current.value;

    bodyForm.current = value1;
    nameForm.current = value2;
    emailForm.current = value3;

    let postBody = {
      body: bodyForm.current,
      name: nameForm.current,
      email: emailForm.current,
      product_id: parseInt(useProductId),
    };

    postQuestions(postBody);
    setQuestionModal(false);
  };

  const onCancel = () => {
    setQuestionModal(false);
  };

  if (useQuestionModal === true) {
    return (
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Ask Your Question</h4>
          </div>
          <div className="modal-body">
            About the {productName[0].name}
            <>
              <br></br>
              <textarea
                rows="10"
                cols="60"
                wrap="soft"
                ref={bodyForm}
                required
                placeholder="*Your question..."
              ></textarea>
              <>
                <div>
                  *Nickname <br></br>
                  <input
                    className="body-username"
                    type="text"
                    placeholder="Example: jackson11!"
                    ref={nameForm}
                    maxLength="1000"
                    size="30"
                    required
                  ></input>
                </div>
                <div>
                  *Email <br></br>
                  <input
                    className="body-email"
                    type="email"
                    pattern="email"
                    placeholder="Why did you like the product or not?"
                    ref={emailForm}
                    maxLength="1000"
                    size="30"
                    required
                  ></input>{" "}
                  <br></br> -For authentication reasons, you will not be
                  emailed.
                </div>
              </>
            </>
          </div>
          <div className="modal-footer">
            <button
              className="post-q"
              onClick={() => {
                onSubmit();
              }}
            >
              Post
            </button>
            <button
              className="cancel-q"
              onClick={() => {
                onCancel();
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default QuestionModal;

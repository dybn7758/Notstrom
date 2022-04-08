import React, {useEffect} from 'react';
import { atom, useSetRecoilState, useRecoilState, selector, useRecoilValue } from 'recoil';
import { showAnswerModal, limitedQuestions, productQuestionsSelector, productQ, questionModalData, selectedProductId, answerModalSelector, specifiedQuestion, photoModal } from '../../lib/Atoms.jsx';
import { postAnswers } from '../../lib/searchAPI.js';

var AnswerModal = () => {

  let [useAnswerModal, setAnswerModal] = useRecoilState(showAnswerModal);
  let [useProductId, setProductId] = useRecoilState(selectedProductId);
  let productName = useRecoilValue(questionModalData);
  let questionBody = useRecoilValue(answerModalSelector);
  let [useQuestionId, setQuestionId] = useRecoilState(specifiedQuestion);
  let [usephotoUpload, setPhotoUpload] = useRecoilState(photoModal);

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
      photos: [],
    };

    postAnswers(postBody, parseInt(useQuestionId));
    setAnswerModal(false);
  };

  const onCancel = () => {
    setAnswerModal(false);
  };

  const photoUpload = () => {
    console.log(document.getElementsByClassName('body=images')[0].files)
    let photos = document.getElementsByClassName('body=images')[0].files;
    if (document.getElementsByClassName('body=images')[0].files.length >= 5) {
      console.log(document.getElementsByClassName('body=images')[0].disabled);
      document.getElementsByClassName('body=images')[0].disabled = true;
    }
    // for(let photo in photos) {

    // }
    // setPhotoUpload() //set the photos to this state to be rendered below
  };

  if (useAnswerModal === true) {
    return(
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Submit your Answer</h4>
          </div>
          <div className="modal-body">{productName[0].name}: {questionBody.question_body}
            <><br></br>
              <textarea rows='10' cols='60' wrap='soft' ref={bodyForm} required placeholder='*Your question...'></textarea>
              <>
                <div>*Nickname <br></br>
                  <input className="body-username" type="text" placeholder="Example: jack543!" ref={nameForm} maxLength='1000' size='30' required></input>
                </div> -For privacy reasons, do not use your full name or email address”
                <div>*Email <br></br>
                  <input className="body-email" type="email" pattern="email" placeholder="Example: jack@email.com" ref={emailForm} maxLength='1000' size='30' required></input> <br></br> -For authentication reasons, you will not be emailed.
                </div>
                <div>
                  <label>Add up to 5 photos
                  <input className="body=images" type="file" multiple onChange={() => {photoUpload()}} accept="image/*" disabled={false}></input></label>
                  {usephotoUpload.map((photo, photoId) => {
                    return (
                      <img key={photoId}></img>
                    )
                  })}
                </div>
                </>
            </>
          </div>
          <div className="modal-footer">
            <button className="post-q" onClick={() => {onSubmit();}}>Post</button><button className="cancel-q" onClick={() => {onCancel();}}>Cancel</button>
          </div>
        </div>
      </div>
    )
  } else {
    return null;
  }
};

export default AnswerModal;

import React, {useEffect} from 'react';
import $ from 'jquery';
import { atom, useSetRecoilState, useRecoilState, selector, useRecoilValue } from 'recoil';
import { showAnswerModal, limitedQuestions, productQuestionsSelector, productQ, questionModalData, selectedProductId, answerModalSelector, specifiedQuestion, photoModal, toggleUpload } from '../../lib/Atoms.jsx';
import { postAnswers } from '../../lib/searchAPI.js';
import './Styling/Modal.scss';

var AnswerModal = () => {

  let [useAnswerModal, setAnswerModal] = useRecoilState(showAnswerModal);
  let [useProductId, setProductId] = useRecoilState(selectedProductId);
  let productName = useRecoilValue(questionModalData);
  let questionBody = useRecoilValue(answerModalSelector);
  let [useQuestionId, setQuestionId] = useRecoilState(specifiedQuestion);
  let [usephotoUpload, setPhotoUpload] = useRecoilState(photoModal);
  let [toggleUploads, setToggleUpload] = useRecoilState(toggleUpload);

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

  const photoUpload = (e) => {

    let photoUpload = Array.from(e.target.files);

    photoUpload.forEach((photo) => {
      let reader = new FileReader();
      reader.onloadend = () => {
        setPhotoUpload([...usephotoUpload, reader.result]);
      };

      reader.readAsDataURL(photo);
    })

    if (usephotoUpload.length > 3) {
      console.log('disabling')
      setToggleUpload(true);
    }
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
              <textarea rows='10' cols='60' wrap='soft' ref={bodyForm} required placeholder='*Your answer...'></textarea>
              <>
                <div>*Nickname <br></br>
                  <input className="body-username" type="text" placeholder="Example: jack543!" ref={nameForm} maxLength='1000' size='30' required></input>
                </div> -For privacy reasons, do not use your full name or email address.
                <div>*Email <br></br>
                  <input className="body-email" type="email" pattern="email" placeholder="Example: jack@email.com" ref={emailForm} maxLength='1000' size='30' required></input> <br></br> -For authentication reasons, you will not be emailed.
                </div>
                <div>
                  <label className="photo-count">Add up to {5 - usephotoUpload.length} photos
                  <input className="body-images" type="file" multiple onChange={(e) => {photoUpload(e)}} accept="image/*" alt="Image preview..." disabled={toggleUploads}></input></label>
                  {usephotoUpload.map((photo, i) => {
                    return (
                      <img key={i} id={'preview' + i} src={photo} width="150" height="125"></img>
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

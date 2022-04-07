import React, {useEffect} from 'react';
import { atom, useSetRecoilState, useRecoilState, selector, useRecoilValue } from 'recoil';
import { showQuestionModal, limitedQuestions, productQuestionsSelector, productQ, questionModalData } from '../../lib/Atoms.jsx';

var QuestionModal = () => {

  let [useQuestionModal, setQuestionModal] = useRecoilState(showQuestionModal);

  let productName = useRecoilValue(questionModalData);
  console.log(productName.name, 'what is this data?');

  const onSubmit = () => {
    //perform a post request to the API
    console.log('posted')
    setQuestionModal(false);
  };

  const onCancel = () => {
    setQuestionModal(false);
  };

  if (useQuestionModal === true) {
    return(
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Ask Your Question</h4>
          </div>
          <div className="modal-body">About the {productName[0].name}
            <><br></br>
              <textarea rows='10' cols='60' wrap='soft' required placeholder='*Your question...'></textarea>
              <>
                <div>*Nickname <br></br>
                  <input className="body-username" type="text" placeholder="Example: jackson11!" maxlength='1000' size='30' required></input>
                </div>
                <div>*Email <br></br>
                  <input className="body-email" type="text" placeholder="Why did you like the product or not?" maxlength='1000' size='30' required></input> <br></br> - For authentication reasons, you will not be emailed.
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

export default QuestionModal;

import React, {useEffect} from 'react';
import { atom, useSetRecoilState, useRecoilState, selector, useRecoilValue } from 'recoil';

var QuestionModal = () => {

  return(
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Post a new question...</h4>
        </div>
        <div className="modal-body">
          What is the accuracy of the size>
          <input className="content-body" type="text" defaultValue="Input Here..."></input>
        </div>
        <div className="modal-footer">
          <button className="post-q">Post</button><button className="cancel-q">Cancel</button>
        </div>
      </div>
    </div>
  )
};

export default QuestionModal;

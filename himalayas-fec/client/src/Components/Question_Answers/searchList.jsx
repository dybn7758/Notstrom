import React, { useEffect } from 'react';
import moment from 'moment';
import AnswerModal from './answerModal.jsx';
import { postAnswers, putQuesHelpful, putQuesReport, putAnsHelpful, putAnsReport } from '../../lib/searchAPI.js';
import { searchAns, showMoreAnsSelector, searchAnsCount, showAnswerModal, specifiedQuestion } from '../../lib/Atoms.jsx';
import { atom, useSetRecoilState, useRecoilState, selector, useRecoilValue } from 'recoil';

var SearchList = (props) => {
  let answered = Object.values(props.entries.answers);
  console.log(props.entries, 'props')
  let [showMoreAns, setMoreAns] = useRecoilState(searchAns);
  let relevantAns = useRecoilValue(showMoreAnsSelector);
  let [ansCount, setAnsCount] = useRecoilState(searchAnsCount);
  let [useModal, setUseModal] = useRecoilState(showAnswerModal);
  let [useQuestionId, setQuestionId] = useRecoilState(specifiedQuestion);

  useEffect(() => {
    setMoreAns(answered);
  }, []);

  const showMoreAnswers = (event) => {
    setAnsCount(ansCount+2);
  };

  const addAnswer = (e) => {
    setQuestionId(e.target.id);
    setUseModal(true);
  };

  const helpFulQuesClick = (e) => {
    putQuesHelpful(e.target.id);
  };

  const helpFulAnsClick = (e) => {
    putAnsHelpful(e.target.id);
  };

  const reportAnsClick = () => {
    //need to change text to reported once clicked
    //putAnsReport() //need answer id
  };

  const showMoreAnsFeat = () => {
    if (showMoreAns.length > 2) {
      return (
        <> <br></br><br></br>
          <span className="more-ans" onClick={(e) => {showMoreAnswers()}}> Show More Answers </span>
        </>
      );
    }
  };

  return(
    <div>
      <>
        <h4>Q: {props.entries.question_body}</h4>
        <div>
          <span className="asker-name"> by {props.entries.asker_name}, </span>
          <span className="q-date"> {moment(props.entries.question_date).format("MMM Do, YY")} </span> <span id={props.entries.question_id} className="helpfulness" onClick={(e) => {helpFulQuesClick(e)}}> | helpful? </span>
          <span className="yes-no"> yes({props.entries.question_helpfulness}) </span>
          <span id={props.entries.question_id} className="add-ans" onClick={(e) => {addAnswer(e)}}> | Add Answer </span>
        </div>
        <AnswerModal/>
        <br></br>
      </>
      {relevantAns.map((ans, i, array) => {
          return (
            <div className="answers" key={ans.id}>
              <div>A: {ans.body}</div>
              <div>
                {ans.photos.map((photo, i) => {
                  return <img key={i} src={photo}></img>}
                )}
              </div>
              <div>
                <span className="ans-name"> by {ans.answerer_name}, </span>
                <span className="a-date"> {moment(ans.date).format("MMM Do, YY")} </span>
                <span id={ans.id} className="helpfullness" onClick={(e) => {helpFulAnsClick(e)}}> | helpful? </span>
                <span className='yes-no'> yes({ans.helpfulness}) </span> |
                <span className="report" onClick={(e) => {reportAnsClick(e)}}> Report </span>
              </div><br></br>
            </div>
          )
      })}
      {showMoreAnsFeat()}
    </div>
  )
};

export default SearchList;
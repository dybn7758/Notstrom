import React, { useEffect } from 'react';
import moment from 'moment';
import AnswerModal from './answerModal.jsx';
import { postAnswers, putQuesHelpful, putAnsHelpful, putAnsReport } from '../../lib/searchAPI.js';
import { searchAns, showMoreAnsSelector, searchAnsCount, showAnswerModal, specifiedQuestion, reportedAnswer } from '../../lib/Atoms.jsx';
import { atom, useSetRecoilState, useRecoilState, selector, useRecoilValue } from 'recoil';
import './Styling/searchList.scss';

var SearchList = (props) => {
  let answered = Object.values(props.entries.answers);
  let [showMoreAns, setMoreAns] = useRecoilState(searchAns);
  let relevantAns = useRecoilValue(showMoreAnsSelector);
  let [ansCount, setAnsCount] = useRecoilState(searchAnsCount);
  let [useModal, setUseModal] = useRecoilState(showAnswerModal);
  let [useQuestionId, setQuestionId] = useRecoilState(specifiedQuestion);
  let [reportAnswer, setReportAnswer] = useRecoilState(reportedAnswer);

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

  const reportAnsClick = (e) => {
    //need to change text to reported once clicked
    setReportAnswer('reported');
    document.getElementsByClassName("report").innerHTML = reportAnswer;
    putAnsReport(e.target.id);
  };

  const showMoreAnsFeat = () => {
    if (showMoreAns.length > 2) {
      return (
        <> <br></br>
          <span className="more-ans" onClick={(e) => {showMoreAnswers()}}> Show More Answers </span>
        </>
      );
    }
  };

  return(
    <div id="questions">
      <>
        <div id="sub-questions"><strong>Q: </strong><span className="by-ques">{props.entries.question_body}</span></div>
        <div id="question-span">
          <span className="asker-name">by {props.entries.asker_name}, </span>
          <span className="q-date" margin="10px"> {moment(props.entries.question_date).format("MMM Do, YY")} </span> | <span id={props.entries.question_id} className="helpfulness" onClick={(e) => {helpFulQuesClick(e)}}>helpful?</span>
          <span className="yes-no"> yes ( {props.entries.question_helpfulness} ) </span> |
          <span id={props.entries.question_id} className="add-ans" onClick={(e) => {addAnswer(e)}}>Add Answer </span>
        </div>
        <AnswerModal/>
        <br></br>
      </>
      {relevantAns.map((ans, i, array) => {
          return (
            <div className="answers" key={ans.id}>
              <div><strong>A: </strong> <span className="by-ans">{ans.body}</span></div>
              <div id="ans-photos">
                {ans.photos.map((photo, i) => {
                  return <img key={i} className="ans-photo" src={photo}></img>}
                )}
              </div>
              <div className="answerers">
                <span className="ans-name"> by {ans.answerer_name}, </span>
                <span className="a-date"> {moment(ans.date).format("MMM Do, YY")} </span> |
                <span id={ans.id} className="helpfulness" onClick={(e) => {helpFulAnsClick(e)}}>helpful?</span>
                <span className='yes-no'> yes ( {ans.helpfulness} ) </span> |
                <span id={ans.id} className="report" onClick={(e) => {reportAnsClick(e)}}>report </span>
              </div><br></br>
            </div>
          )
      })}
      {showMoreAnsFeat()}
    </div>
  )
};

export default SearchList;
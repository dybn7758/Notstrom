import React, { useEffect } from 'react';
import moment from 'moment';
import { searchAns, showMoreAnsSelector, searchAnsCount } from '../../lib/Atoms.jsx';
import { atom, useSetRecoilState, useRecoilState, selector, useRecoilValue } from 'recoil';

var SearchList = (props) => {
  let answered = Object.values(props.entries.answers);
  let [showMoreAns, setMoreAns] = useRecoilState(searchAns);
  let relevantAns = useRecoilValue(showMoreAnsSelector);
  let [ansCount, setAnsCount] = useRecoilState(searchAnsCount);

  useEffect(() => {
    setMoreAns(answered);
  }, []);

  // const answerDisplay = (count = 2) => {
  //   count = count + 2 || count;
  //   let copiedAnswers = answered.slice(0, answered.length);
  //   // setMoreAns(answered.slice(0, 2))
  //   return copiedAnswers.slice(0, count);
  // }

  const showMoreAnswers = (event) => {
    setAnsCount(ansCount+2);
  };

  return(
    <div>
      <>
        <h4>Q: {props.entries.question_body}</h4>
        <div>
          <span className="asker-name"> by {props.entries.asker_name}, </span>
          <span className="q-date"> {moment(props.entries.question_date).format("MMM Do, YY")} </span> <span className="helpfulness"> | helpful? </span>
          <span className="yes-no"> yes({props.entries.question_helpfulness}) </span>
          <span className="add-ans"> | Add Answer </span>
        </div>
        <br></br>
      </>
      {relevantAns.map((ans, i, array) => {
        if (array.length < 3) {
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
                <span className="a-date"> {moment(ans.date).fromNow()} </span>
                <span className="helpfullness"> | helpful? </span>
                <span className='yes-no'> yes({ans.helpfulness}) </span> |
                <span className="report"> Report </span>
              </div><br></br>
            </div>
          )
        } else {
          return (
            <div key={ans.id}>
              <div>A: {ans.body}</div>
              <div>
                {ans.photos.map((photo, i) => {
                  return <img key={i} src={photo}></img>}
                )}
              </div>
              <div>
                <span className="ans-name"> by {ans.answerer_name}, </span>
                <span className="a-date"> {moment(ans.date).fromNow()} </span>
                <span className="helpfullness"> | helpful? </span>
                <span className='yes-no'> yes({ans.helpfulness}) </span> |
                <span className="report"> Report </span>
              </div><br></br>
              <>
                <span className="more-ans" onClick={(e) => {showMoreAnswers()}}> Show More Answers </span>
              </>
            </div>
          )
        }
      })}
    </div>
  )
};

export default SearchList;
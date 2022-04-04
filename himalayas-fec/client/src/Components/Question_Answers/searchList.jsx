import React from 'react';
import moment from 'moment';

var SearchList = (props) => {

  //Will need to sort this array eventually to show the top rated, then hide the remaining answers
  let answered = Object.values(props.entries.answers);
  //Will need to add photos under each answer if array !== 0

  return(
    <div>
      <>
        <h4>Q: {props.entries.question_body}</h4>
        <div>
          <span className="asker-name"> by {props.entries.asker_name}, </span>
          <span className="q-date"> {moment(props.entries.question_date).fromNow()} </span> <span className="helpfulness"> | helpful? </span>
          <span className="yes-no"> yes({props.entries.question_helpfulness}) </span>
          <span className="add-ans"> | Add Answer </span>
        </div>
        <br></br>
      </>
      {answered.map((ans) => {
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
          </div>
        </div>
        )
      })}
    </div>
  )
};

export default SearchList;
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
        <div>by {props.entries.asker_name}, {moment(props.entries.question_date).fromNow()} | helpful? yes({props.entries.question_helpfulness}) | Add Answer</div><br></br>
      </>
      {answered.map((ans) => {
        return (
        <div key={ans.id}>
          <div>A: {ans.body} </div>
          <div>by {ans.answerer_name}, {moment(ans.date).fromNow()} | helpful? yes({ans.helpfulness}) | Report</div>
        </div>
        )
      })}
    </div>
  )
};

export default SearchList;
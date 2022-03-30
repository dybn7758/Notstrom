import React from 'react';

var SearchList = (props) => {

  let {...answers} = props.entries.answers;
  console.log(answers)

  return(
    <div>
      <h3>Q: {props.entries.question_body}</h3>
      {/* <div>A: {props.entries.answers} */}

      {/* </div> */}
    </div>
  )
};

export default SearchList;
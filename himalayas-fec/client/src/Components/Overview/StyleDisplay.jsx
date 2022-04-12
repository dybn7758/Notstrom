import React from 'react';

const StyleDisplay = (props) => {

  // console.log('sdprops', props)

  return(
    <div className="styleDisplay">
      <img src={props.image}></img>
    </div>
  )
};


export default StyleDisplay;
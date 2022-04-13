import React, { useEffect } from 'react';

const StyleDisplay = (props) => {

  // console.log('sdprops', props);

  return(
    <div className="styleDisplay">
      <img src={props.image} hight="300" width="300"></img>
    </div>
  )
};


export default StyleDisplay;
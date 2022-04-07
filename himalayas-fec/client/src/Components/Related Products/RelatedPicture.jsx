import React from 'react';
import {pictures, stylesResponse, currentRelatedID} from '../../lib/Atoms.jsx';
import {useRecoilValue, useRecoilState} from 'recoil';

const RelatedPicture = (props) => {

  const [pictureValue, setPicture] = useRecoilState(pictures);
  const [currentRelatedIDValue, setCurrentRelatedID] = useRecoilState(currentRelatedID);
  const products = stylesResponse();
    // setCurrentRelatedID(props.index);

  return (
    <div>
      <div style={{ position: 'relative', width: 200, height: 225, backgroundImage: `url(${pictureValue})`}} onClick={() => {console.log('picture')}}></div>
    </div>
  )
}

export default RelatedPicture;
import React from 'react';
import {pictures, stylesResponse} from '../../lib/Atoms.jsx';
import {useRecoilValue, useRecoilState} from 'recoil';

const RelatedPicture = () => {
  const [pictureValue, setPicture] = useRecoilState(pictures);
  const products = stylesResponse();

  return (
    <div>
      <div style={{ position: 'relative', width: 200, height: 225, backgroundImage: `url(${pictureValue})`}} onClick={() => {console.log('picture')}}></div>
    </div>
  )
}

export default RelatedPicture;
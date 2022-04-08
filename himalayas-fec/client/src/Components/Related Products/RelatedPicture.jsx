import React, {useEffect} from 'react';
import {stylesResponse, stylesAndProducts} from '../../lib/Atoms.jsx';
import {useRecoilValue, useRecoilState} from 'recoil';

const RelatedPicture = (props) => {
  const [stylesAndProductsValue, setStylesAndProducts] = useRecoilState(stylesAndProducts);
  const nextIndex = props.props1 + 1;
  const currentPicture = stylesAndProductsValue[nextIndex].data.results[0].photos[0].url;
  // const currentName = stylesAndProductsValue[props.props1 + 1].data.;

  return (
    <div>
      <div style={{ position: 'relative', width: 200, height: 225, backgroundImage: `url(${currentPicture})`}} onClick={() => {console.log('picture')}}></div>
    </div>
  )
}

export default RelatedPicture;


import {stylesAndProducts} from '../../lib/Atoms.jsx';
import {useRecoilValue, useRecoilState} from 'recoil';
import React from 'react';
import './relatedSass.scss';

const RelatedName = (props) => {
  const [stylesAndProductsValue, setStylesAndProducts] = useRecoilState(stylesAndProducts);
  const currentName = stylesAndProductsValue[props.props1 - 2].data.name;

  return (
    <div>
      <h1 className='relatedName'>{currentName}</h1>
    </div>
  )
}

export default RelatedName;
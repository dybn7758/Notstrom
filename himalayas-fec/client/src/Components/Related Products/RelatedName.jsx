import {stylesAndProducts} from '../../lib/Atoms.jsx';
import {useRecoilValue, useRecoilState} from 'recoil';
import React from 'react';
const RelatedName = (props) => {
  const [stylesAndProductsValue, setStylesAndProducts] = useRecoilState(stylesAndProducts);
  const currentName = stylesAndProductsValue[props.props1 - 2].data.name;
  return (
    <div>
      <h1 style={{margin: 2, position: 'absolute', bottom: 18, left: 10, fontSize: 14, fontWeight: 'bold'}}>{currentName}</h1>
    </div>
  )
}

export default RelatedName;
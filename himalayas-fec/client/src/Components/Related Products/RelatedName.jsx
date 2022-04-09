import {stylesAndProducts} from '../../lib/Atoms.jsx';
import {useRecoilValue, useRecoilState} from 'recoil';
import React from 'react';
import '../../../dist/'
const RelatedName = (props) => {
  const [stylesAndProductsValue, setStylesAndProducts] = useRecoilState(stylesAndProducts);
  const currentName = stylesAndProductsValue[props.props1].data.name;
  return (
    <div>
      <h1 style={{margin: 2, position: 'absolute', top: 20, left: 10, fontSize: 14, fontWeight: 'bold'}}>{currentName}</h1>
    </div>
  )
}

export default RelatedName;
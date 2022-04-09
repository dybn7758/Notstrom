import {currentProductByID, stylesAndProducts} from '../../lib/Atoms.jsx';
import {useRecoilValue, useRecoilState} from 'recoil';
import React from 'react';


const RelatedCategory = (props) => {
  const [stylesAndProductsValue, setStylesAndProducts] = useRecoilState(stylesAndProducts);
  const currentCategory = stylesAndProductsValue[props.props1].data.category;

  return (
    <div>
      <h1 style={{margin: 2, position: 'absolute', top: 0, left: 10, fontSize: 14}}>{currentCategory}</h1>
    </div>
  )
}

export default RelatedCategory;
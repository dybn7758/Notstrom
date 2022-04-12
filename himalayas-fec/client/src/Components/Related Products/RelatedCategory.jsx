import {currentProductByID, stylesAndProducts} from '../../lib/Atoms.jsx';
import {useRecoilValue, useRecoilState} from 'recoil';
import React from 'react';
import './relatedData.scss';


const RelatedCategory = (props) => {
  const [stylesAndProductsValue, setStylesAndProducts] = useRecoilState(stylesAndProducts);
  const currentCategory = stylesAndProductsValue[props.props1 - 2].data.category;

  return (
    <div>
      <h1 className='relatedCategory'>{currentCategory}</h1>
    </div>
  )
}

export default RelatedCategory;
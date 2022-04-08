import {currentProductByID, stylesAndProducts} from '../../lib/Atoms.jsx';
import {useRecoilValue, useRecoilState} from 'recoil';
import React from 'react';

const RelatedPrice = (props) => {
  const [stylesAndProductsValue, setStylesAndProducts] = useRecoilState(stylesAndProducts);
  const currentPrice = stylesAndProductsValue[props.props1].data.default_price;

  return (
    <div>
      <h1 style={{margin: 2, position: 'absolute', top: 40, left: 10, fontSize: 12}}>{currentPrice}</h1>
    </div>
  )
}

export default RelatedPrice;
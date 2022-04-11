import {currentProductByID, stylesAndProducts} from '../../lib/Atoms.jsx';
import {useRecoilValue, useRecoilState} from 'recoil';
import React from 'react';

const RelatedPrice = (props) => {
  const [stylesAndProductsValue, setStylesAndProducts] = useRecoilState(stylesAndProducts);
  const currentPrice = stylesAndProductsValue[props.props1 - 2].data.default_price;
  const salePricePath = stylesAndProductsValue[props.props1 - 1].data.results[0];

  const saleChecker = () => {
    if (salePricePath.sale_price !== null){
      return (
        <h1 style={{margin: 2, position: 'absolute', top: 40, left: 10, fontSize: 12}}>
          <Text style={{textDecorationLine: 'line-through'}}>{currentPrice}</Text>
          <Text style={{color: 'red'}}>{salePricePath.sale_price}</Text>
        </h1>
      )
    } else {
      return (
        <h1 style={{margin: 2, position: 'absolute', bottom: 5, left: 10, fontSize: 12}}>{currentPrice}</h1>
      )
    }
  }

  return (
    <div>
      {saleChecker()}
    </div>
  )
}

export default RelatedPrice;
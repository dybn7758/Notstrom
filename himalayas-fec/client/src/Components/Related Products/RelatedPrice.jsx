import React from 'react';
import {price, currentProductByID} from '../../lib/Atoms.jsx';
import {useRecoilValue, useRecoilState} from 'recoil';

const RelatedPrice = (props) => {
  const [priceValue, setPrice] = useRecoilState(price);
  const products = currentProductByID();

  return (
    <div>
      <h1 style={{margin: 2, position: 'absolute', top: 40, left: 10, fontSize: 12}}>${priceValue}</h1>
    </div>
  )
}

export default RelatedPrice;
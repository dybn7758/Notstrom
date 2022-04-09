import {relatedOnSale, currentProduct} from '../../lib/Atoms.jsx';
import {useRecoilValue, useRecoilState} from 'recoil';
import {AiOutlineCheck, AiOutlineClose} from 'react-icons/ai';
import React from 'react';

const TableSales = (props) => {
  const [relatedOnSaleValue, setRelatedOnSale] = useRecoilState(relatedOnSale);
  let checker;

  if (relatedOnSaleValue === true) {
    checker = <AiOutlineCheck style={{color: 'green'}}/>;
  } else {
    checker = <AiOutlineClose style={{color: 'red'}}/>;
  }

  return (
    <tr>
      <td>{checker}</td>
      <td>On Sale?</td>
      <td>price</td>
    </tr>
  )
}

export default TableSales;
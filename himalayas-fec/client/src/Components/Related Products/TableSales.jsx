import {relatedOnSale, currentProduct, currentStylesSelector} from '../../lib/Atoms.jsx';
import {useRecoilValue, useRecoilState} from 'recoil';
import {AiOutlineCheck, AiOutlineClose} from 'react-icons/ai';
import React from 'react';

const TableSales = (props) => {
  const [relatedOnSaleValue, setRelatedOnSale] = useRecoilState(relatedOnSale);
  const currentStyles = useRecoilValue(currentStylesSelector);
  let checker;
  let checker2;
  if (relatedOnSaleValue === true) {
    checker = <AiOutlineCheck style={{color: 'green'}}/>;
  } else {
    checker = <AiOutlineClose style={{color: 'red'}}/>;
  }

  if (currentStyles.results[0].sale_price !== null) {
    checker2 = <AiOutlineCheck style={{color: 'green'}}/>;
  } else {
    checker2 = <AiOutlineClose style={{color: 'red'}}/>;
  }

  return (
    <tr>
      <td style={{textAlign: 'center', border: "3px solid rgb(0, 0, 0)"}}>{checker}</td>
      <td style={{textAlign: 'center', border: "3px solid rgb(0, 0, 0)"}}>On Sale?</td>
      <td style={{textAlign: 'center', border: "3px solid rgb(0, 0, 0)"}}>{checker2}</td>
    </tr>
  )
}

export default TableSales;
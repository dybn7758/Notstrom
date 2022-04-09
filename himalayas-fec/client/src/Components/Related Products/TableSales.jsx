import {stylesAndProducts} from '../../lib/Atoms.jsx';
import {useRecoilValue, useRecoilState} from 'recoil';
import {Checkmark} from 'react-ionicons';
import React from 'react';

const TableSales = (props) => {
  const [stylesAndProductsValue, setStylesAndProducts] = useRecoilState(stylesAndProducts);

  const saleData = {salePrice: <Checkmark/>, onSale: 'On Sale', salePrice2: ''};

  return (
    <tr>
      <td>price</td>
      <td>onsale</td>
      <td>price</td>
    </tr>
  )
}

export default TableSales;
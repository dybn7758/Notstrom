import React from 'react';
import {Checkmark} from 'react-ionicons';
import {stylesAndProducts} from '../../lib/Atoms.jsx';
import {useRecoilValue, useRecoilState} from 'recoil';

const TableSales = (props) => {
  const [stylesAndProductsValue, setStylesAndProducts] = useRecoilState(stylesAndProducts);

  const saleData = {salePrice: <Checkmark/>, onSale: 'On Sale', salePrice2: ''};

  return (
    <tr>
      <td>{saleData.salePrice}</td>
      <td>{saleData.onSale}</td>
      <td>{saleData.salePrice2}</td>
    </tr>
  )
}

export default TableSales;
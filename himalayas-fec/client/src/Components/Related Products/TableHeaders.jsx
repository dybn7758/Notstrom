import {stylesAndProducts} from '../../lib/Atoms.jsx';
import {useRecoilValue, useRecoilState} from 'recoil';
import React from 'react';

const TableHeaders = (props) => {
  const [stylesAndProductsValue, setStylesAndProducts] = useRecoilState(stylesAndProducts);
  // const shortName = stylesAndProductsValue[props.props1 + 1].data.results[0].name;
  // add product short name to header
  return (
    <tr>
      <th>Product1</th>
      <th>Category</th>
      <th>Product 2</th>
    </tr>
  )
}

export default TableHeaders;


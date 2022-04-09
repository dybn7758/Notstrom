import {stylesAndProducts} from '../../lib/Atoms.jsx';
import {useRecoilValue, useRecoilState} from 'recoil';
import React from 'react';

const TableStyles = (props) => {
  const [stylesAndProductsValue, setStylesAndProducts] = useRecoilState(stylesAndProducts);
  // const stylesVar = stylesAndProductsValue[props.props1 + 1].data.results.length;
  // const styleData =  {stylesAvail: stylesVar, stylesText: 'Styles', stylesAvail2: 0};

  return (
    <tr>
      <td>data</td>
      <td>data</td>
      <td>data</td>
    </tr>
  )
}

export default TableStyles;
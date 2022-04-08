import React from 'react';
import {stylesAndProducts} from '../../lib/Atoms.jsx';
import {useRecoilValue, useRecoilState} from 'recoil';

const TableStyles = (props) => {
  const [stylesAndProductsValue, setStylesAndProducts] = useRecoilState(stylesAndProducts);
  const stylesVar = stylesAndProductsValue[props.props1 + 1].data.results.length;
  const styleData =  {stylesAvail: stylesVar, stylesText: 'Styles', stylesAvail2: 0};

  return (
    <tr>
      <td>{styleData.stylesAvail}</td>
      <td>{styleData.stylesText}</td>
      <td>{styleData.stylesAvail2}</td>
    </tr>
  )
}

export default TableStyles;
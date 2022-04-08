import React from 'react';
import {Checkmark} from 'react-ionicons';

import {stylesAndProducts} from '../../lib/Atoms.jsx';
import {useRecoilValue, useRecoilState} from 'recoil';

const TableFeatures = (props) => {
  const [stylesAndProductsValue, setStylesAndProducts] = useRecoilState(stylesAndProducts);
  const currentFeatures = stylesAndProductsValue[props.props1].data.features;

  return (
    currentFeatures.map((value, index) => {
      // console.log(value, index, 'mapping')
      return(
        <tr key={index}>
          <td>{value.value}</td>
          <td>{value.feature}</td>
          <td>Add Compare</td>
        </tr>
      )
    })
  )
}

export default TableFeatures;
import {stylesAndProducts, currentProduct, currentRelatedName} from '../../lib/Atoms.jsx';
import {useRecoilValue, useRecoilState} from 'recoil';
import React from 'react';

const TableHeaders = () => {
  const [currentProductValue, setCurrentProduct] = useRecoilState(currentProduct);
  const [currentNameValue, setCurrentName] = useRecoilState(currentRelatedName)



  return (
    <tr>
      <th>{currentNameValue}</th>
      <th>Category</th>
      <th>{currentProductValue.name}</th>
    </tr>
  )
}

export default TableHeaders;


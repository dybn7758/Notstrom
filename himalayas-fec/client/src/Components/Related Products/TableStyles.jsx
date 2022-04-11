import {currentRelatedStyles, currentStylesSelector, relatedIndex} from '../../lib/Atoms.jsx';
import {useRecoilValue, useRecoilState} from 'recoil';
import React from 'react';

const TableStyles = () => {
  const [relatedIndexValue, setRelatedIndex] = useRecoilState(relatedIndex);
  const [currentRelatedStylesValue, setCurrentRelatedStyles] = useRecoilState(currentRelatedStyles);
  const currentStyles = useRecoilValue(currentStylesSelector);

  return (
    <tr>
      <td>{currentRelatedStylesValue}</td>
      <td>Styles</td>
      <td>{currentStyles.results.length}</td>
    </tr>
  )
}

export default TableStyles;
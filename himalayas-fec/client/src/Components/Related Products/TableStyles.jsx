import {currentRelatedStyles, currentStylesSelector, relatedIndex} from '../../lib/Atoms.jsx';
import {useRecoilValue, useRecoilState} from 'recoil';
import React from 'react';

const TableStyles = () => {
  const [relatedIndexValue, setRelatedIndex] = useRecoilState(relatedIndex);
  const [currentRelatedStylesValue, setCurrentRelatedStyles] = useRecoilState(currentRelatedStyles);
  const currentStyles = useRecoilValue(currentStylesSelector);

  return (
    <tr>
      <td style={{textAlign: 'center', border: "3px solid rgb(0, 0, 0)"}}>{currentRelatedStylesValue}</td>
      <td style={{textAlign: 'center', border: "3px solid rgb(0, 0, 0)"}}>Styles</td>
      <td style={{textAlign: 'center', border: "3px solid rgb(0, 0, 0)"}}>{currentStyles.results.length}</td>
    </tr>
  )
}

export default TableStyles;
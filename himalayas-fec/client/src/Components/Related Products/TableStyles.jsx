import {currentRelatedStyles, currentStylesSelector, relatedIndex} from '../../lib/Atoms.jsx';
import {useRecoilValue, useRecoilState} from 'recoil';
import React from 'react';

const TableStyles = () => {
  const [relatedIndexValue, setRelatedIndex] = useRecoilState(relatedIndex);
  const [currentRelatedStylesValue, setCurrentRelatedStyles] = useRecoilState(currentRelatedStyles);
  const currentStyles = useRecoilValue(currentStylesSelector);

  return (
    <tr>
      <td className='tableRowValue'>{currentRelatedStylesValue}</td>
      <td className='tableRowValue'>Styles</td>
      <td className='tableRowValue'>{currentStyles.results.length}</td>
    </tr>
  )
}

export default TableStyles;
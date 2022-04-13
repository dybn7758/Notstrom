import {currentProduct, currentFeatures, currentStylesSelector} from '../../lib/Atoms.jsx';
import {useRecoilValue, useRecoilState} from 'recoil';
import {AiOutlineCheck, AiOutlineClose} from 'react-icons/ai';
import React, {useEffect} from 'react';

const TableFeatures = () => {
  const [currentFeaturesValue, setCurrentFeatures] = useRecoilState(currentFeatures);
  const [currentProductValue, setCurrentProduct] = useRecoilState(currentProduct);
  const currentStyles = useRecoilValue(currentStylesSelector);

  return (
    currentFeaturesValue.map((value, index) => {
      const currentProductFeatures = currentProductValue.features || '---------';
      return (
        <tr key={index}>
          <td className='tableRowValue'>{value.value}</td>
          <td className='tableRowValue'>{value.feature}</td>
          <td className='tableRowValue'>{currentProductFeatures}</td>
        </tr>
      )
    }
    )
  )
}

export default TableFeatures;
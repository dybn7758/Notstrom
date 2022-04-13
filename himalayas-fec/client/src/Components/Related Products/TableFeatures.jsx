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
          <td style={{textAlign: 'center', border: "3px solid rgb(0, 0, 0)"}}>{value.value}</td>
          <td style={{textAlign: 'center', border: "3px solid rgb(0, 0, 0)"}}>{value.feature}</td>
          <td style={{textAlign: 'center', border: "3px solid rgb(0, 0, 0)"}}>{currentProductFeatures}</td>
        </tr>
      )
    }
    )
  )
}

export default TableFeatures;
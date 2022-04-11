import {currentProduct, currentFeatures, currentStylesSelector} from '../../lib/Atoms.jsx';
import {useRecoilValue, useRecoilState} from 'recoil';
import {AiOutlineCheck, AiOutlineClose} from 'react-icons/ai';
import React, {useEffect} from 'react';

const TableFeatures = () => {
  const [currentFeaturesValue, setCurrentFeatures] = useRecoilState(currentFeatures);
  const [currentProductValue, setCurrentProduct] = useRecoilState(currentProduct);
  const currentStyles = useRecoilValue(currentStylesSelector);



// console.log(currentProductValue, 'current product')

  return (
    currentFeaturesValue.map((value, index) => {
      // const currentProductFeatures = currentProductValue.features
      return (
        <tr key={index}>
          <td>{value.value}</td>
          <td>{value.feature}</td>
          <td>No Features?</td>
        </tr>
      )
    }
    )
  )
}

export default TableFeatures;
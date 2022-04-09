import {stylesAndProducts, currentFeatures} from '../../lib/Atoms.jsx';
import {useRecoilValue, useRecoilState} from 'recoil';
import {Checkmark} from 'react-ionicons';
import React, {useEffect} from 'react';

const TableFeatures = (props) => {

  // useEffect(() => {
  //   setCurrentFeatures(theseFeatures);
  // }, []);

  const [stylesAndProductsValue, setStylesAndProducts] = useRecoilState(stylesAndProducts);
  const [currentFeaturesValue, setCurrentFeatures] = useRecoilState(currentFeatures);
  // const theseFeatures = stylesAndProductsValue[props.props1].data.features;

  return (
    // currentFeaturesValue.map((value, index) => {
      // return(
        <tr >

        {/* <tr key={index}> */}
          <td>value</td>
          <td>value</td>
          <td>Add Compare</td>
        </tr>
      )
    }
    // )
  // )
// }

export default TableFeatures;
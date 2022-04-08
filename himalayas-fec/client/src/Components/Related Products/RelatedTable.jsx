import React from 'react';
import {Checkmark} from 'react-ionicons';
import {stylesAndProducts} from '../../lib/Atoms.jsx';
import {useRecoilValue, useRecoilState} from 'recoil';
import TableSales from './TableSales.jsx'
import TableHeaders from './TableHeaders.jsx';
import TableStyles from './TableStyles.jsx';
import TableFeatures from './TableFeatures.jsx';


const RelatedTable = (props) => {
  const [stylesAndProductsValue, setStylesAndProducts] = useRecoilState(stylesAndProducts);


  const tbd = {mapValue1: '', mapCat: '', mapValue2: ''};

  return (
    <div>Comparing
      <table >
        <TableHeaders/>
        <TableSales props1={props.props1}/>
        <TableStyles props1={props.props1}/>
        <TableFeatures props1={props.props1}/>
    </table>
    </div>
  )
}

export default RelatedTable;
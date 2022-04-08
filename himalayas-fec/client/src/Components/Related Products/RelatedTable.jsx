import {stylesAndProducts} from '../../lib/Atoms.jsx';
import {useRecoilValue, useRecoilState} from 'recoil';
import TableFeatures from './TableFeatures.jsx';
import TableHeaders from './TableHeaders.jsx';
import TableStyles from './TableStyles.jsx';
import {Checkmark} from 'react-ionicons';
import TableSales from './TableSales.jsx';
import React from 'react';


const RelatedTable = (props) => {
  const [stylesAndProductsValue, setStylesAndProducts] = useRecoilState(stylesAndProducts);

  return (
    <div>Comparing
      <table >
        <TableHeaders props1={props.props1}/>
        <TableSales props1={props.props1}/>
        <TableStyles props1={props.props1}/>
        <TableFeatures props1={props.props1}/>
    </table>
    </div>
  )
}

export default RelatedTable;
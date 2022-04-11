import {stylesAndProducts} from '../../lib/Atoms.jsx';
import {useRecoilValue, useRecoilState} from 'recoil';
import TableFeatures from './TableFeatures.jsx';
import TableHeaders from './TableHeaders.jsx';
import TableStyles from './TableStyles.jsx';
import TableSales from './TableSales.jsx';
import React from 'react';


const RelatedTable = (props) => {
  const [stylesAndProductsValue, setStylesAndProducts] = useRecoilState(stylesAndProducts);

  return (
    <div>Comparing
      <table >
        <TableHeaders />
        <TableSales />
        <TableStyles />
        <TableFeatures />
    </table>
    </div>
  )
}

export default RelatedTable;
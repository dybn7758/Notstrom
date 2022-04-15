import TableFeatures from './TableFeatures.jsx';
import TableHeaders from './TableHeaders.jsx';
import TableStyles from './TableStyles.jsx';
import TableSales from './TableSales.jsx';
import React from 'react';
import './relatedTable.scss'

const RelatedTable = () => {

  return (
    <div className='relatedTableMain'>
        <table className='tableInner'>
          <tbody>
            <TableHeaders />
            <TableSales />
            <TableStyles />
            <TableFeatures />
          </tbody>
        </table>
    </div>
  )
}

export default RelatedTable;
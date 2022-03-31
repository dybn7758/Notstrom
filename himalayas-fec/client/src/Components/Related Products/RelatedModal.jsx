// when star icon is clicked on the carousel card
  // open a modal
    // title should be 'Comparing'
    // the modal should compare clicked item to current item in product view
      // values to compare should be

import React from 'react';
import RelatedCard from './RelatedCard.jsx';
import RelatedTable from './RelatedTable.jsx';

const RelatedModal = (props) => {
  const showState = props.state;

  return (
    <div style={{
      display: showState,
      background: 'gray',
      height: 300,
      width: 300,
      position: 'fixed', left: '50%', top: '50%'
    }}>
    <RelatedTable/>
      <button style={{
        position: 'absolute',
        bottom: 0,
        left: '50%',
      }}onClick={props.handleClose}>Close</button>
    </div>
  )
}

export default RelatedModal;
// when star icon is clicked on the carousel card
  // open a modal
    // title should be 'Comparing'
    // the modal should compare clicked item to current item in product view
      // values to compare should be

import React from 'react';
import RelatedCard from './RelatedCard.jsx';

const RelatedModal = (props) => {
  const showState = props.state;

  return (
    <div style={{
      display: showState,
      position: 'fixed', left: '50%', top: '50%'
    }}>
      <table>
        <thead>
        <tr>
          <th>Item 1</th>
          <th>Comparing</th>
          <th>Item 2</th>
        </tr>
        </thead>

      </table>
      <button onClick={props.handleClose}>Close</button>
    </div>
  )
}

export default RelatedModal;
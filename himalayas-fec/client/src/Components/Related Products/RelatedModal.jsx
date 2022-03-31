// when star icon is clicked on the carousel card
  // open a modal
    // title should be 'Comparing'
    // the modal should compare clicked item to current item in product view
      // values to compare should be

import React from 'react';
import RelatedCard from './RelatedCard.jsx';

const RelatedModal = (props) => {
  const showState = props.state;
  console.log(showState);

  return (
    <div style={{
      display: showState,
    }}>
      <section className='modal-main'>
        <button onClick={props.handleClose}>Close</button>
        </section>
    </div>
  )
}

export default RelatedModal;
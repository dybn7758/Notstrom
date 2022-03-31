// when star icon is clicked on the carousel card
  // open a modal
    // title should be 'Comparing'
    // the modal should compare clicked item to current item in product view
      // values to compare should be

import React from 'react';
import '../../App.css';

const RelatedModal = (props) => {
  const showHideClassName = props.show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        <button onClick={props.handleClose}>Close</button>
        </section>
    </div>
  )
}

export default RelatedModal;
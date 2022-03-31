// when star icon is clicked on the carousel card
  // open a modal
    // title should be 'Comparing'
    // the modal should compare clicked item to current item in product view
      // values to compare should be
import React from 'react';

const RelatedModal = props => {

  if (!props.show) {
    return null;
  }

  return (
    <div className='modal' style={{
      position: 'fixed',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      background: 'white',
      display: 'flex',
      alignItems: 'center',
    }}>
      <div className='modal-content' style={{
        width: 200,
        background: 'gray',
      }}>
        <div className='modal-header' style={{
          padding: 10,
        }}>
          <h4 className='modal-title' style={{
            margin: 0,
          }}>Modal Title</h4>
        </div>
        <div className='modal-body' style={{
          padding: 10,
        }}>
          This is Modal Content
        </div>
        <button className='button'>Close</button>
      </div>
    </div>
  )
}

export default RelatedModal;
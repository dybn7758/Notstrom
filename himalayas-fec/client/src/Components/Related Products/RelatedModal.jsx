// when star icon is clicked on the carousel card
  // open a modal
    // title should be 'Comparing'
    // the modal should compare clicked item to current item in product view
      // values to compare should be
import React from 'react';

export default class Modal extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
  return (
    <div className='modal'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h4 className='modal-title'>Modal Title</h4>
        </div>
        <div className='modal-body'>
          This is Modal Content
        </div>
        <button className='button'>Close</button>
      </div>
    </div>
  )

}
}
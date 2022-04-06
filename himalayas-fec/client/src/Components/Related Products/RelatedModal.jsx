import React from 'react';
import RelatedTable from './RelatedTable.jsx';
import {useRecoilState} from 'recoil';
import {show} from '../../lib/Atoms.jsx';

export const RelatedModal = () => {

  const [showValue, setShow] = useRecoilState(show);

  return (
    <div style={{
      display: showValue[0], background: 'gray',height: 300,
      width: 300,position: 'fixed', left: '50%', top: '50%',
      zIndex: 10
    }}>
    <RelatedTable/>
      <button style={{position: 'absolute', bottom: 0, left: '50%'}}
      onClick={() => {setShow(['none'])}}>Close</button>
    </div>
  )
}

// when star icon is clicked on the carousel card
  // open a modal
    // title should be 'Comparing'
    // the modal should compare clicked item to current item in product view
      // values to compare should be
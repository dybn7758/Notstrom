import RelatedTable from './RelatedTable.jsx';
import {show} from '../../lib/Atoms.jsx';
import {useRecoilState} from 'recoil';
import React from 'react';

export const RelatedModal = (props) => {

  const [showValue, setShow] = useRecoilState(show);

  return (
    <div style={{
      display: showValue[0], background: 'gray',height: 500,
      width: 500,position: 'fixed', left: '25%', top: '25%',
      zIndex: 10
    }}>
    <RelatedTable props1={props.props1}/>
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
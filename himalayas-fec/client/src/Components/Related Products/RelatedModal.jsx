import RelatedTable from './RelatedTable.jsx';
import {show} from '../../lib/Atoms.jsx';
import {useRecoilState} from 'recoil';
import React from 'react';

export const RelatedModal = (props) => {

  const closeModal = () => {
    setShow(['none']);
  }

  const [showValue, setShow] = useRecoilState(show);

  return (
    <div style={{
      display: showValue[0], background: 'gray',height: 250,
      width: 500, position: 'fixed', left: '25%', top: '25%',
      zIndex: 8
    }}>
    <RelatedTable props1={props.props1}/>
      <button style={{position: 'absolute', bottom: 0, left: '50%', zIndex: 20}}
      onClick={() => {closeModal()}}>Close</button>
    </div>
  )
}
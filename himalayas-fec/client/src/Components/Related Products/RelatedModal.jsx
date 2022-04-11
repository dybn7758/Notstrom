import RelatedTable from './RelatedTable.jsx';
import {show} from '../../lib/Atoms.jsx';
import {useRecoilState} from 'recoil';
import React from 'react';

const RelatedModal = (props) => {

  const [showValue, setShow] = useRecoilState(show);

  return (
    <div style={{height: '100%', width: '100%', backgroundColor: 'green', zIndex: 90, justifyContent: 'center'}}>

      <div style={{
        display: showValue[0], background: 'gray', height: 500, overflow: 'auto', maxHeight: '30rem',
        width: 500, maxWidth: '100%', maxHeight: '100%', position: 'fixed', left: '50%', top: '50%', transform: 'translate(-50%, -50%)',
        zIndex: 100,
      }}>
      <RelatedTable props1={props.props1}/>
      </div>
    </div>
  )
}

export default RelatedModal;

// filter: 'blur(8px)',
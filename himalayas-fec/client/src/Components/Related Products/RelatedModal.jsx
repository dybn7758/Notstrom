import RelatedTable from './RelatedTable.jsx';
import {show} from '../../lib/Atoms.jsx';
import {useRecoilState} from 'recoil';
import React from 'react';

const RelatedModal = (props) => {

  const [showValue, setShow] = useRecoilState(show);

  return (
    <div>

      <div style={{
        display: showValue[0], background: 'gray',height: 200, overflow: 'auto', maxHeight: '30rem',
        width: 500, position: 'fixed', left: '25%', top: '25%',
        zIndex: 8,
      }}>
      <RelatedTable props1={props.props1}/>
      </div>
    </div>
  )
}

export default RelatedModal;

// filter: 'blur(8px)',
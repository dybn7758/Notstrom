import RelatedTable from './RelatedTable.jsx';
import {show} from '../../lib/Atoms.jsx';
import {useRecoilState} from 'recoil';
import React from 'react';
import './relatedsass.scss';

const RelatedModal = (props) => {

  const [showValue, setShow] = useRecoilState(show);

  return (
    <div>
      <div style={{display: showValue[0], transform: 'translate(-50%, -50%)'}}>
        <RelatedTable props1={props.props1}/>
      </div>
    </div>
  )
}

export default RelatedModal;

// filter: 'blur(8px)',
import RelatedTable from './RelatedTable.jsx';
import {show} from '../../lib/Atoms.jsx';
import {useRecoilState} from 'recoil';
import React from 'react';
import './relatedSass.scss';

const RelatedModal = (props) => {

  const closeModal = () => {
    setShow(['none']);
  }

  const [showValue, setShow] = useRecoilState(show);

  return (
    <div>
    <div style={{top: '10%', position: 'fixed', zIndex: 90, height: '100vh', width: '100vh', opacity: 0.9, backgroundColor: 'black', display: showValue[0]}}>
      <div style={{opacity: 100, overflow: 'auto', position: 'absolute', left: '50%',
      top: '50%', height: 300, width: 400, backgroundColor: 'gray', display: showValue[0], transform: 'translate(-50%, -50%)'}}>
        <RelatedTable props1={props.props1}/>
      </div>
      <button className='relatedModalClose' onClick={() => {closeModal()}}>Close</button>
    </div>
    </div>
  )
}

export default RelatedModal;

// filter: 'blur(8px)',
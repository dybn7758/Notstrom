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
      <div className='relatedModalOuter1' style={{display: showValue[0]}}>
        <div className='relatedModalOuter2' style={{display: showValue[0]}}>
          <div className='relatedModalOuter3' style={{display: showValue[0]}}>
            <text className='comparingText'>Comparing</text>
            <div className='relatedModalInner' style={{display: showValue[0], transform: 'translate(-50%, -50%)'}}>
              <RelatedTable props1={props.props1}/>
            </div>
            <button className='relatedModalClose' onClick={() => {closeModal()}}>Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RelatedModal;

// filter: 'blur(8px)',
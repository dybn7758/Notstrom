import React from 'react';
import RelatedModal from './RelatedModal.jsx';
import {Star} from 'react-ionicons';
import RelatedThumbs from './RelatedThumbs.jsx';
import {useRecoilState} from 'recoil';
import {show} from '../../lib/Atoms.jsx';


const RelatedCard = () => {

  const [showValue, setShow] = useRecoilState(show);

  const closeModal = () => {
    setShow(['none']);
  }
  const showThumbs = () => {
    console.log('hovering');
    return (
    <div><RelatedThumbs/></div>
    )
  }

  return (
    <div style={{float: 'left', position: 'relative', height: 325, width: 200, margin: 10}}>{}
      <div
      style={{ position: 'relative', backgroundColor: 'blue', width: 200, height: 225, zIndex: 1}} onClick={() => {
      console.log('clicked picture')}}>
      <Star style={{ position: 'absolute', top: 10, right: 10, zIndex: 2}} onClick={ () => {setShow(['block'])}}/>
      </div>
        <div style={{ position: 'relative', bottom: 0, backgroundColor: 'gray', width: 200, height: 100, alignItems: 'bottom'}}>
          <h1 style={{ position: 'absolute', top: 0, left: 10, fontSize: 14}}>Category</h1>
          <h1 style={{ position: 'absolute', top: 30, left: 10, fontSize: 14}}>$100.00</h1>
          <h1 style={{ position: 'absolute', top: 15, left: 10, fontSize: 14}}>product</h1>
      <div style={{ height: 20, width: 100, bottom: 10, left: 10, background: 'yellow', position: 'absolute'}}>Stars</div>
      <RelatedModal/>
      </div>
    </div>
  )
}

export default RelatedCard;

// onMouseEnter={() => {console.log('mouse over!')}} onMouseLeave={() => {console.log()}}
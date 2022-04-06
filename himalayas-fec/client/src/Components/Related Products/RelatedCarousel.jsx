import React from 'react';
import {RelatedModal} from './RelatedModal.jsx';
import RelatedCategory from './RelatedCategory.jsx';
import RelatedPicture from './RelatedPicture.jsx';
import RelatedPrice from './RelatedPrice.jsx';
import RelatedName from './RelatedName.jsx';
import {useRecoilValue, useRecoilState} from 'recoil';
import {ArrowBackCircle, ArrowForwardCircle, StarOutline} from 'react-ionicons';
import {show, relatedIDs, currentRelatedID} from '../../lib/Atoms.jsx';
const apiCalls = require('../../lib/searchAPI.js');



const RelatedCarousel = (props) => {

  const [showValue, setShow] = useRecoilState(show);
  const [currentRelatedIDValue, setCurrentRelatedID] = useRecoilState(currentRelatedID);
  const [relatedIDArray, setRelatedIDArray] = useRecoilState(relatedIDs);

  return (
    <div>
      <h1 style={{position: 'relative', fontSize: 14}}>Related Products</h1>
      <div style={{width: 1000, height: 350, background: 'lightgray', margin: 5, overflow: 'hidden'}}>
        <ArrowBackCircle style={{position: 'relative', top: '50%', left: '5%', zIndex: 5}} onClick={()=>{console.log('this')}}/>
        {relatedIDArray.map(index => {
          return (
            <div key={index} style={{float: 'left', position: 'relative', height: 325, width: 200, margin: 10}}>
              <RelatedPicture index={index}/>
              <StarOutline color={'yellow'} style={{position: 'absolute', top: 10, right: 10, zIndex: 2}} onClick={() => {setShow(['block']); console.log(event, 'star')}}/>
                <div style={{position: 'relative', bottom: 0, backgroundColor: 'gray', width: 200, height: 100, alignItems: 'bottom'}}>
                  <RelatedCategory/>
                  <RelatedName/>
                  <RelatedPrice/>
                <div style={{ height: 20, width: 100, bottom: 10, left: 10, background: 'yellow', position: 'absolute'}}>Stars</div>
                  <RelatedModal/>
              </div>
            </div>
          )})}
      <ArrowForwardCircle style={{position: 'relative', top: '50%', right: 10, zIndex: 5}} onClick={()=>{console.log('that')}}/>
    </div>
  </div>
  )
}

export default RelatedCarousel;

// onMouseEnter={() => {console.log('mouse over!')}} onMouseLeave={() => {console.log()}}

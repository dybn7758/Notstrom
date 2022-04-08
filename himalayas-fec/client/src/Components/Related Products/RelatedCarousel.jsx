import {show, relatedIDs, relatedSelector, stylesAndProducts} from '../../lib/Atoms.jsx';
import {ArrowBackCircle, ArrowForwardCircle, StarOutline} from 'react-ionicons';
import {useRecoilValue, useRecoilState} from 'recoil';
import RelatedCategory from './RelatedCategory.jsx';
const apiCalls = require('../../lib/searchAPI.js');
import RelatedPicture from './RelatedPicture.jsx';
import {RelatedModal} from './RelatedModal.jsx';
import RelatedPrice from './RelatedPrice.jsx';
import RelatedName from './RelatedName.jsx';
import React, {useEffect} from 'react';



const RelatedCarousel = (props) => {
  const [relatedArrayValue, setRelatedArray] = useRecoilState(relatedIDs);
  const [stylesAndProductsValue, setStylesAndProducts] = useRecoilState(stylesAndProducts);
  const [showValue, setShow] = useRecoilState(show);
  const array = useRecoilValue(relatedSelector)


  useEffect(() => {
    setRelatedArray(array)
    callWrapper()
  }, []);

  const callWrapper = () => {
    const allResponse = [];
    const relatedStyles = [];
    const relatedProducts = [];
    array.forEach((arrayIndex) => {
      allResponse.push(apiCalls.productsByID(arrayIndex), apiCalls.productStyles(arrayIndex))
    })

    const allData = Promise.all(allResponse)
    allData.then((response) => {
      setStylesAndProducts(response)
    })
    .catch((error) => {
      console.log(error)
    })
  }





  return (
    <div>
      <h1 style={{position: 'relative', fontSize: 14}}>Related Products</h1>
      <div style={{width: 1000, height: 350, background: 'lightgray', margin: 5, overflow: 'hidden'}}>
        <ArrowBackCircle style={{position: 'relative', top: '50%', left: '5%', zIndex: 5}} onClick={()=>{console.log('this')}}/>

        {stylesAndProductsValue.map((value, index) => {
          if (index % 2 === 0) {
          return (
            <div key={index} style={{float: 'left', position: 'relative', height: 325, width: 200, margin: 10}}>
              <RelatedPicture props1={index}/>
              <StarOutline color={'yellow'} style={{position: 'absolute', top: 10, right: 10, zIndex: 2}} onClick={() => {setShow(['block']); console.log(event, stylesAndProductsValue[index].data.id)}}/>
                <div style={{position: 'relative', bottom: 0, backgroundColor: 'gray', width: 200, height: 100, alignItems: 'bottom'}}>
                  <RelatedCategory props1={index}/>
                  <RelatedName props1={index}/>
                  <RelatedPrice props1={index}/>
                <div style={{ height: 20, width: 100, bottom: 10, left: 10, background: 'yellow', position: 'absolute'}}>Stars</div>
                  <RelatedModal props1={index}/>
              </div>
            </div>
          )}})}

      <ArrowForwardCircle style={{position: 'relative', top: '50%', right: 10, zIndex: 5}} onClick={()=>{console.log('that')}}/>
    </div>
  </div>
  )
}

export default RelatedCarousel;

// onMouseEnter={() => {console.log('mouse over!')}} onMouseLeave={() => {console.log()}}

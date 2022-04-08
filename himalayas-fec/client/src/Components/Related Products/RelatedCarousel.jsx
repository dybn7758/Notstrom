import {show, relatedIDs, relatedSelector, stylesAndProducts, sliderState, sliderLength, sliderSelector} from '../../lib/Atoms.jsx';
import {useRecoilValue, useRecoilState} from 'recoil';
import RelatedCategory from './RelatedCategory.jsx';
const apiCalls = require('../../lib/searchAPI.js');
import RelatedPicture from './RelatedPicture.jsx';
import {RelatedModal} from './RelatedModal.jsx';
import RelatedPrice from './RelatedPrice.jsx';
import RelatedName from './RelatedName.jsx';
import {StarOutline} from 'react-ionicons';
import React, {useEffect} from 'react';



const RelatedCarousel = (props) => {
  const [relatedArrayValue, setRelatedArray] = useRecoilState(relatedIDs);
  const [stylesAndProductsValue, setStylesAndProducts] = useRecoilState(stylesAndProducts);
  const [sliderValue, setSlider] = useRecoilState(sliderState);
  const [showValue, setShow] = useRecoilState(show);
  const array = useRecoilValue(relatedSelector);
  const [lengthValue, setLength] = useRecoilState(sliderLength);
  const currentSliderValue = useRecoilValue(sliderSelector)



  useEffect(() => {
    setRelatedArray(array)
    callWrapper()
  }, []);

  useEffect(() => {
    setLength(stylesAndProductsValue.length / 2)
  }, [stylesAndProductsValue]);

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

  const closeModal = () => {
    setShow(['none']);
  }

  const next = () => {
    if (sliderValue < (lengthValue - 1)) {
        setSlider(sliderValue + 1)
    }
  };

  const prev = () => {
    if (sliderValue > 0) {
        setSlider(sliderValue - 1)
    }
  };





  return (
    <div className='carousel-conatiner'>
      <div className="carousel-wrapper">
        <button onClick={() => {prev(), console.log(sliderValue)}} className='left-arrow'>Left</button>
          <div className="carousel-content-wrapper">
              {stylesAndProductsValue.map((value, index) => {
                if (index % 2 === 0) {
                  return (
                  <div key={index} className='carousel-content' itemsToShow={1} style={{float: 'left', transform: `translateX(-${sliderValue * 100}%)`}}>
                  <div key={index} style={{ position: 'relative', height: 325, width: 200, margin: 10}}>
                    <RelatedPicture props1={index}/>
                    <StarOutline color={'yellow'} style={{position: 'absolute', top: 10, right: 10, zIndex: 2}} onClick={() => {setShow(['block']); console.log(stylesAndProductsValue[index].data.id)}}/>
                    <div style={{position: 'relative', bottom: 0, backgroundColor: 'gray', width: 200, height: 100, alignItems: 'bottom'}}>
                    <RelatedCategory props1={index}/>
                    <RelatedName props1={index}/>
                    <RelatedPrice props1={index}/>
                    <div style={{ height: 20, width: 100, bottom: 10, left: 10, background: 'yellow', position: 'absolute'}}>Stars</div>
                    <RelatedModal props1={index}/>
                  </div>
                </div>
              </div>
              )}})}
            </div>
        <button onClick={() => {next(), console.log(sliderValue)}} className='right-arrow'>Right</button>
      </div>
    </div>
  )
}

export default RelatedCarousel;











import {show, relatedIDs, relatedSelector, currentStylesSelector,
  stylesAndProducts, sliderState, sliderLength, currentRelatedName, buttonToggle,
  sliderSelector, modalData, relatedIndex, selectedProductId, currentRelatedStyles,
  currentFeatures, relatedOnSale, currentProductSelector, currentProduct} from '../../lib/Atoms.jsx';
import {useRecoilValue, useRecoilState} from 'recoil';
import RelatedCategory from './RelatedCategory.jsx';
const apiCalls = require('../../lib/searchAPI.js');
import RelatedPicture from './RelatedPicture.jsx';
import RelatedModal from './RelatedModal.jsx';
import RelatedStars from './RelatedStars.jsx';
import RelatedPrice from './RelatedPrice.jsx';
import RelatedName from './RelatedName.jsx';
import React, {useEffect} from 'react';
import {AiTwotoneStar} from 'react-icons/ai';


const RelatedCarousel = (props) => {
  const [stylesAndProductsValue, setStylesAndProducts] = useRecoilState(stylesAndProducts);
  const [buttonToggleValue, setButtonToggle] = useRecoilState(buttonToggle);
  const [currentRelatedStylesValue, setCurrentRelatedStyles] = useRecoilState(currentRelatedStyles);
  const [currentNameValue, setCurrentName] = useRecoilState(currentRelatedName)
  const [currentProductValue, setCurrentProduct] = useRecoilState(currentProduct);
  const [currentFeaturesValue, setCurrentFeatures] = useRecoilState(currentFeatures);
  const [selectedIdValue, setSelectedId] = useRecoilState(selectedProductId);
  const [relatedOnSaleValue, setRelatedOnSale] = useRecoilState(relatedOnSale);
  const [modalDatavalue, setModalData] = useRecoilState(modalData);
  const [relatedArrayValue, setRelatedArray] = useRecoilState(relatedIDs);
  const [relatedIndexValue, setRelatedIndex] = useRecoilState(relatedIndex);
  const [lengthValue, setLength] = useRecoilState(sliderLength);
  const [sliderValue, setSlider] = useRecoilState(sliderState);
  const currentSliderValue = useRecoilValue(sliderSelector);
  const [showValue, setShow] = useRecoilState(show);
  const array = useRecoilValue(relatedSelector);
  const currentProductVar = useRecoilValue(currentProductSelector);
  const currentStyles = useRecoilValue(currentStylesSelector);

  // console.log(currentStyles, 'styles', currentProductVar, 'product')

  useEffect(() => {
    setRelatedArray(array)
    callWrapper()
  }, []);

  useEffect(() => {
    setLength(stylesAndProductsValue.length / 2)
  }, [stylesAndProductsValue]);

  const callWrapper = () => {
    const allResponse = [];
    // const relatedStyles = [];
    // const relatedProducts = [];
    array.forEach((arrayIndex) => {
      allResponse.push(apiCalls.productsByID(arrayIndex), apiCalls.productStyles(arrayIndex), apiCalls.listReviews(arrayIndex, 1, 10));
    })

    const allData = Promise.all(allResponse)
    allData.then((response) => {
      setStylesAndProducts(response)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const setStates = (index) => {
    setRelatedIndex(index);
    const features = stylesAndProductsValue[relatedIndexValue - 2].data.features;
    const name = stylesAndProductsValue[relatedIndexValue - 2].data.name;
    const stylesArray = stylesAndProductsValue[relatedIndexValue - 1].data.results.length;
    setCurrentRelatedStyles(stylesArray);
    setCurrentName(name);
    setCurrentFeatures(features);
    if (stylesAndProductsValue[relatedIndexValue -1].data.results[0].sale_price !== null) {
      setRelatedOnSale(true)
    } else {
      setRelatedOnSale(false)
    }
    currentProductVar.forEach((index) => {
      if (index.id === Number(selectedIdValue)) {
        setCurrentProduct(index);
      }
    })
  }

  const next = () => {
    if (sliderValue < (lengthValue - 1)) {
        setSlider(sliderValue + 1);
    }
  };

  const prev = () => {
    if (sliderValue > 0) {
        setSlider(sliderValue - 1);
    }
  };

  const getModal = (data) => {
    setModalData(data)
    setShow(['block'])
  }

  return (
    <div className='carousel-conatiner'>
      <div style={{ position: "relative", fontSize: 20, fontWeigt: 'bold'}}>Related Products</div>
      <div className="carousel-wrapper">
        <button onClick={() => {prev()}} className='left-arrow' style={{zIndex: 10, position: 'absolute', left: '10%'}}>Left</button>
          <div className="carousel-content-wrapper">
              {stylesAndProductsValue.map((value, index) => {
                if ((index + 1) % 3 === 0) {
                  return (
                  <div key={index} className='carousel-content' itemsToShow={1}
                    style={{float: 'left', transform: `translateX(-${sliderValue * 100}%)`}}>
                  <div key={index} style={{ position: 'relative', height: 325, width: 200, margin: 10}}>
                    <RelatedPicture props1={index}/>
                    <AiTwotoneStar color={'yellow'} style={{height: 30, width: 30, position: 'absolute', top: 10, right: 10, zIndex: 2}}
                      onClick={ () => {
                        setStates(index)
                        getModal(value)
                      } }/>
                    <div style={{position: 'relative', bottom: 0, backgroundColor: 'gray', width: 200, height: 100, alignItems: 'bottom'}}>
                      <RelatedCategory props1={index}/>
                      <RelatedName props1={index}/>
                      <RelatedPrice props1={index}/>
                      <RelatedStars props1={index}/>
                  </div>
                </div>
              </div>
              )}})}
            </div>
        <button onClick={() => {next(), console.log(sliderValue)}} className='right-arrow'>Right</button>
        <RelatedModal/>
      </div>
      <div style={{ position: 'relative', width: 300, fontSize: 20, fontWeigth: 'bold'}}>Your Outfit</div>
    </div>
  )
}

export default RelatedCarousel;











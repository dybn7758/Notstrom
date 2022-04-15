import {show, relatedIDs, relatedSelector, currentStylesSelector, modalButtonShowHide,
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
import {AiTwotoneStar} from 'react-icons/ai';
import RelatedName from './RelatedName.jsx';
import React, {useEffect, useMemo} from 'react';
import './relatedSass.scss';

const RelatedCarousel = (props) => {
  const [currentRelatedStylesValue, setCurrentRelatedStyles] = useRecoilState(currentRelatedStyles);
  const [stylesAndProductsValue, setStylesAndProducts] = useRecoilState(stylesAndProducts);
  const [currentFeaturesValue, setCurrentFeatures] = useRecoilState(currentFeatures);
  const [currentProductValue, setCurrentProduct] = useRecoilState(currentProduct);
  const [modalButtonValue, setModalButton] = useRecoilState(modalButtonShowHide);
  const [currentNameValue, setCurrentName] = useRecoilState(currentRelatedName);
  const [relatedOnSaleValue, setRelatedOnSale] = useRecoilState(relatedOnSale);
  const [selectedIdValue, setSelectedId] = useRecoilState(selectedProductId);
  const [relatedIndexValue, setRelatedIndex] = useRecoilState(relatedIndex);
  const [relatedArrayValue, setRelatedArray] = useRecoilState(relatedIDs);
  const currentProductVar = useRecoilValue(currentProductSelector);
  const [modalDatavalue, setModalData] = useRecoilState(modalData);
  const [lengthValue, setLength] = useRecoilState(sliderLength);
  const [sliderValue, setSlider] = useRecoilState(sliderState);
  const currentStyles = useRecoilValue(currentStylesSelector);
  const currentSliderValue = useRecoilValue(sliderSelector);
  const [showValue, setShow] = useRecoilState(show);

  useEffect(() => {
    callWrapper()
  },[]);

  useEffect(() => {
    setLength(stylesAndProductsValue.length / 3) // might need to change this
  }, [stylesAndProductsValue]);

  const callWrapper = () => {
    const allResponse = [];
    relatedArrayValue.forEach(async (arrayIndex) => {
      await allResponse.push(apiCalls.productsByID(arrayIndex), apiCalls.productStyles(arrayIndex), apiCalls.listReviews(arrayIndex, 1, 10));
    })

    const allData = Promise.all(allResponse)
    allData.then( async (response) => {
      await setStylesAndProducts(response)
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
  const showHide = () => {
    console.log(lengthValue, 'some datas', sliderValue)
    if (sliderValue === 1) {
      setModalButton(['none', 'block'])
    } else if (sliderValue === lengthValue - 2) {
      setModalButton(['block', 'none'])
    } else {
      setModalButton(['block', 'block'])
    }
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
    setShow(['flex'])
  }

  return (
    <div className='carousel-conatiner'>
      <div className="carousel-wrapper">
        <div className='relatedCarouselHeader'>Related Products</div>
            <button id='leftArrow' style={{display: `${modalButtonValue[0]}`}} onClick={() => {showHide(), prev()}}>Left</button>
              <div className="carousel-content-wrapper">
              {stylesAndProductsValue.map((value, index) => {
                if ((index + 1) % 3 === 0) {
                  return (
                  <div key={index} className='carousel-content'
                    style={{float: 'left', transform: `translateX(-${sliderValue * 100}%)`}}>
                  <div key={index} className='relatedCarouselMap'>
                    <RelatedPicture props1={index} props2={props.props1}/>
                    <AiTwotoneStar color={'green'} className='relatedStar' onClick={ () => {
                        setStates(index)
                        getModal(value)
                      }}/>
                    <div className='relatedContentBundler'>
                      <RelatedCategory props1={index}/>
                      <RelatedName props1={index}/>
                      <RelatedPrice props1={index}/>
                      <RelatedStars props1={index}/>
                  </div>
                </div>
              </div>
              )}})}
            </div>
              <button id='rightArrow' style={{display: `${modalButtonValue[1]}`}} onClick={() => {showHide(), next()}}>Right</button>
      </div>
      <div className='outfitHeader'>Your Outfit</div>
    </div>
  )
}

export default RelatedCarousel;











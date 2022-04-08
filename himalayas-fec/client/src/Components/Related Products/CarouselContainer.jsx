import {sliderState, sliderLength, stylesAndProducts, sliderSelector} from '../../lib/Atoms.jsx';
import {useRecoilValue, useRecoilState} from 'recoil';
import RelatedCarousel from './RelatedCarousel.jsx';
import React, {useEffect} from 'react';



const CarouselContainer = (props) => {
  const [stylesAndProductsValue, setStylesAndProducts] = useRecoilState(stylesAndProducts);
  const [lengthValue, setLength] = useRecoilState(sliderLength);
  const [sliderValue, setSlider] = useRecoilState(sliderState);
  const currentSliderValue = useRecoilValue(sliderSelector)
  console.log(currentSliderValue, 'slider value')

  useEffect(() => {
    setLength(stylesAndProductsValue.length / 2)
    console.log(lengthValue, 'length inside use effect')
  }, [stylesAndProductsValue]);
  console.log(lengthValue, 'length outside use effect')

  const next = () => {
    if (sliderValue < (lengthValue - 1)) {
        setSlider(sliderValue + 1)
    }
    console.log(sliderValue, 'in next')
  };

  const prev = () => {
    if (sliderValue > 0) {
        setSlider(sliderValue - 1)
    }
    console.log(sliderValue, 'in prev')
  };

  return (
    <div className="carousel-container">
    <div className="carousel-wrapper">
      <button onClick={() => {prev(), console.log(sliderValue)}} className='left-arrow'>Left</button>
      <div className="carousel-content-wrapper">
        <div className='carousel-content' style={{transform: `translateX(-${sliderValue * 100}%)`}}>
          <RelatedCarousel/>
        </div>
      </div>
      <button onClick={() => {next(), console.log(sliderValue)}} className='right-arrow'>Right</button>
    </div>
  </div>
  )
}

export default CarouselContainer;
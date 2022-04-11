import React from 'react';
import {useRecoilState, useRecoilValue} from 'recoil';



export { [stylesAndProductsValue, setStylesAndProducts] = useRecoilState(stylesAndProducts),
[currentNameValue, setCurrentName] = useRecoilState(currentRelatedName)
[currentProductValue, setCurrentProduct] = useRecoilState(currentProduct),
[currentFeaturesValue, setCurrentFeatures] = useRecoilState(currentFeatures),
[selectedIdValue, setSelectedId] = useRecoilState(selectedProductId),
[relatedOnSaleValue, setRelatedOnSale] = useRecoilState(relatedOnSale),
[modalDatavalue, setModalData] = useRecoilState(modalData),
[relatedArrayValue, setRelatedArray] = useRecoilState(relatedIDs),
[relatedIndexValue, setRelatedIndex] = useRecoilState(relatedIndex),
[lengthValue, setLength] = useRecoilState(sliderLength),
[sliderValue, setSlider] = useRecoilState(sliderState),
currentSliderValue = useRecoilValue(sliderSelector),
[showValue, setShow] = useRecoilState(show),
array = useRecoilValue(relatedSelector),
currentProductVar = useRecoilValue(currentProductSelector),
currentStyles = useRecoilValue(currentStylesSelector)
}
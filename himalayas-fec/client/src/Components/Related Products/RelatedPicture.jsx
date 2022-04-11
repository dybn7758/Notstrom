import {stylesResponse, stylesAndProducts, selectedProductId} from '../../lib/Atoms.jsx';
import {useRecoilValue, useRecoilState} from 'recoil';
import React, {useEffect} from 'react';

const RelatedPicture = (props) => {
  const [selectedProductIdValue, setSelectedProductId] = useRecoilState(selectedProductId);
  const [stylesAndProductsValue, setStylesAndProducts] = useRecoilState(stylesAndProducts);
  const nextIndex = props.props1 - 1;
  const currentPicture = stylesAndProductsValue[nextIndex].data.results[0].photos[0].url;
  const currentId = stylesAndProductsValue[nextIndex].data.id;

  const setMainID = (id) => {
    setSelectedProductId(id)
  }
  console.log(currentId, 'current id', selectedProductIdValue)
  return (
    <div>
      <div style={{backgroundSize: 'cover', position: 'relative', width: 200, height: 225,
      backgroundImage: `url(${currentPicture})`}} onClick={() => {setMainID(37312)}}></div>
    </div>
  )
}

export default RelatedPicture;

// onMouseEnter={() => {console.log('mouse over!')}} onMouseLeave={() => {console.log()}}
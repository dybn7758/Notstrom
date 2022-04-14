import {stylesResponse, stylesAndProducts, selectedProductId} from '../../lib/Atoms.jsx';
import {useRecoilValue, useRecoilState} from 'recoil';
import React, {useEffect} from 'react';
import './relatedSass.scss';

const RelatedPicture = (props) => {
  const [selectedProductIdValue, setSelectedProductId] = useRecoilState(selectedProductId);
  const [stylesAndProductsValue, setStylesAndProducts] = useRecoilState(stylesAndProducts);
  const nextIndex = props.props1 - 1;
  const currentPicture = stylesAndProductsValue[nextIndex].data.results[0].photos[0].url;
  const currentId = stylesAndProductsValue[nextIndex].data.id;

  return (
    <div>
      <div className='relatedPicture' style={{backgroundSize: 'cover', backgroundImage: `url(${currentPicture})`}}
      onClick={() => {
        console.log(stylesAndProductsValue[props.props1 - 1].data.product_id, 'clicked id')
        props.props2(stylesAndProductsValue[props.props1 - 1].data.product_id);
      }}>
      </div>
    </div>
  )
}

export default RelatedPicture;

// onMouseEnter={() => {console.log('mouse over!')}} onMouseLeave={() => {console.log()}}


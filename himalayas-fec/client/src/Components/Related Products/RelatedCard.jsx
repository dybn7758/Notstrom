import React from 'react';
import {StarOutline} from 'react-ionicons';
import {relatedIDs, stylesAndProducts, show, relatedSelector} from '../../lib/Atoms.jsx';
import {useRecoilValue, useRecoilState} from 'recoil';
import {RelatedModal} from './RelatedModal.jsx';
const apiCalls = require('../../lib/searchAPI.js');
import RelatedPicture from './RelatedPicture.jsx';
import RelatedCategory from './RelatedCategory.jsx';
import RelatedPrice from './RelatedPrice.jsx';
import RelatedName from './RelatedName.jsx';

const RelatedCard = () => {
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
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <div>
      {stylesAndProductsValue.map((value, index) => {
        console.log('here')
        if (index % 2 === 0) {
        return (
          <div key={index} style={{float: 'left', position: 'relative', height: 325, width: 200, margin: 10}}>
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
        )}})}
    </div>
  )
}

export default RelatedCard;
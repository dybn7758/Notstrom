import React from 'react';
import {RelatedModal} from './RelatedModal.jsx';
import {useRecoilValue, useRecoilState} from 'recoil';
import {ArrowBackCircle, ArrowForwardCircle, StarOutline} from 'react-ionicons';
import {products, category, stylesResponse, show, relatedIDs, categoryResponse, relatedResponse, styles, productResponse} from '../../lib/Atoms.jsx';
const apiCalls = require('../../lib/searchAPI.js');



const RelatedCarousel = () => {
  const [stylesValue, setStyles] = useRecoilState(styles);
  const [productValue, setProducts] = useRecoilState(products);
  const [categoryValue, setCategory] = useRecoilState(category);
  const [relatedValue, setRelated] = useRecoilState(relatedIDs);

  setStyles(stylesResponse()); // array of objects of style for individual item
  setProducts(productResponse());
  setCategory(categoryResponse());
  setRelated(relatedResponse());

  console.log(stylesValue, productValue, categoryValue, relatedValue, 'these things')

  const [showValue, setShow] = useRecoilState(show);
  const closeModal = () => {
    setShow(['none']);
  }

  return (
    <div>
    <h1 style={{position: 'relative', left: '25%'}}>Related Products</h1>
    <div style={{width: 1000, height: 350, background: 'lightgray', margin: 5, overflow: 'hidden'}}>

      <ArrowBackCircle style={{position: 'relative', top: '50%', left: '5%', zIndex: 5}} onClick={()=>{console.log('this')}}/>

        {stylesValue.map((value, index) => {
          return (
            <div key={index} style={{float: 'left', position: 'relative', height: 325, width: 200, margin: 10}}>

            <div style={{ position: 'relative', width: 200, height: 225, backgroundImage: `url(${value.photos[index].url})`}}
            onClick={() => {console.log('picture')}}>

            <StarOutline color={'yellow'} style={{position: 'absolute', top: 10, right: 10, zIndex: 2}} onClick={() => {setShow(['block']); console.log(event, 'star')}}/>

            </div>
              <div style={{position: 'relative', bottom: 0, backgroundColor: 'gray', width: 200, height: 100, alignItems: 'bottom'}}>
                <h1 style={{margin: 2, position: 'absolute', top: 0, left: 10, fontSize: 14}}>{categoryValue}</h1>
                <h1 style={{margin: 2, position: 'absolute', top: 20, left: 10, fontSize: 14, fontWeight: 'bold'}}>{value.name}</h1>
                <h1 style={{margin: 2, position: 'absolute', top: 40, left: 10, fontSize: 12}}>{value.original_price}</h1>

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

// data I need for this page
  // all related products by 'main' id
    // each 'main' id has several sub ids
      // each sub id has several products
  // for each sub product
    // name
    // category
    // price
      // if on sale switch to strike through + sale price
  // attach stars

// still to-do
  // update to appropriate data
  // assign star click to clicked products id
    // set to comparison state for modal table
  // carousel action
import React from 'react';
import {RiCloseCircleFill} from 'react-icons/ri';
import {MdOutlineAddCircle} from 'react-icons/md';
import {outfitCards, currentStylesSelector, currentProductSelector} from '../../lib/Atoms.jsx';
import {useRecoilState, useRecoilValue} from 'recoil';


const RelatedOutfitCard = () => {
  const [outfitCardValue, setOutfitCard] = useRecoilState(outfitCards);
  const currentStyles = useRecoilValue(currentStylesSelector);
  const currentProductVar = useRecoilValue(currentProductSelector);

  // console.log(currentStyles, 'on outfit card')
  // array of outfit cards
  const outfitClickHandler = () => {
    let tempArray = [];
    let tempObj = {name: '', category: '', price: 0, url: '', stars: ''}
    tempObj.name = currentStyles.results[0].name;
    tempObj.category = currentProductVar[0].category;
    tempObj.price = currentProductVar[0].default_price;
    tempObj.url = currentStyles.results[0].photos[0].url;
    tempArray.push(tempObj);
    setOutfitCard(tempArray);
    console.log(outfitCardValue, 'outfit card value')
  }
  return (
    <div style={{ position: 'relative', height: 325, width: 200, margin: 10}}>
      <MdOutlineAddCircle onClick={() => {
        outfitClickHandler()
      }}
      style={{position: 'relative', color: 'green', height: 100, width: 100, left: '20%', top: '25%', zIndex: 20}}/>
          <div style={{position: 'absolute', bottom: 40, left: 25, fontSize: 20, fontWeight: 'bolder'}}>Add To Outfit</div>
        <div>
      </div>
    </div>
  )
}

export default RelatedOutfitCard;

// RiCloseCircleFill
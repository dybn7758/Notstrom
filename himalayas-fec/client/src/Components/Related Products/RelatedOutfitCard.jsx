import React, {useEffect} from 'react';
import {RiCloseCircleFill} from 'react-icons/ri';
import {MdOutlineAddCircle} from 'react-icons/md';
import {outfitCards, currentStylesSelector, currentProductSelector, outfitArray} from '../../lib/Atoms.jsx';
import {useRecoilState, useRecoilValue} from 'recoil';
import './relatedsass.scss';


const RelatedOutfitCard = () => {
  const [outfitCardValue, setOutfitCard] = useRecoilState(outfitCards);
  const currentStyles = useRecoilValue(currentStylesSelector);
  const currentProductVar = useRecoilValue(currentProductSelector);

  const tempObj = {
    name: currentStyles.results[0].name,
    category: currentProductVar[0].category,
    price: currentProductVar[0].default_price,
    url: currentStyles.results[0].photos[0].url,
    stars: ''}

  const outfitClickHandler = () => {
    setOutfitCard(outfitCardValue => [...outfitCardValue, tempObj])
  }

  return (
    <div className='relatedCardContainer'>
      <MdOutlineAddCircle className='relatedOutfitButton' onClick={() => {
        outfitClickHandler()
      }}/>
          <div className='relatedOutfitCard'>Add To Outfit</div>
        <div>
      </div>
    </div>
  )
}

export default RelatedOutfitCard;


import React from 'react';
import {MdOutlineAddCircle} from 'react-icons/md';
import {useRecoilState, useRecoilValue} from 'recoil';
import RelatedOutfitCard from './RelatedOutfitCard.jsx';
import {RiCloseCircleFill} from 'react-icons/ri';
import {outfitCards} from '../../lib/Atoms.jsx';


const RelatedOutfits = () => {
const [outfitArrayValue, setOutfitArray] = useRecoilState(outfitCards)
// let newValue = outfitArrayValue.splice(0, 1);
let newValue;
const deleteCard = async (index) => {

  newValue = [...outfitArrayValue];
  let spliced = newValue.splice(index, 1);

  if (index > -1) {
    setOutfitArray(spliced)
  }
}

  return (
      <div>
      <div>
          <div className='outfitMainOuter'>
            <div className='outfitMainInner'>
                <RelatedOutfitCard/>
            </div>
                {outfitArrayValue.map((value, index) => {
                  return (
                    <div key={index} className='outfitPicture' style={{backgroundSize: 'cover', backgroundImage: `url(${value.url})`}}>
                      <RiCloseCircleFill style={{color: 'red', position: 'relative', left: 5, top: 5, zIndex: 16}} onClick={() => {
                        deleteCard(index)
                      }}/>
                      <div>{value.name}</div>
                      <div>{value.category}</div>
                      <div>{value.price}</div>
                    </div>
                  )
                })}
          </div>
      </div>
  </div>
  )
}

export default RelatedOutfits;

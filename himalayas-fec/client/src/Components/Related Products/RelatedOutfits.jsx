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
          <div style={{width: '100%', height: 340, margin: 5, overflow: 'hidden'}}>
            <div style={{display: 'inline-flex', float: 'left', position: 'relative', height: 325, width: 200,
              zIndex: 5, margin: 10}}>
                <RelatedOutfitCard/>
              <MdOutlineAddCircle style={{color: 'black', height: 50, width: 50, width: '50%',
                marginLeft: '25%', marginRight: '25%', marginTop: '50%', zIndex: 15}} />
            </div>
                {outfitArrayValue.map((value, index) => {
                  return (
                    <div key={index} style={{backgroundSize: 'cover', backgroundImage: `url(${value.url})`, float: 'left', height: 325, width: 200, margin: 5, zIndex: 10}}>
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

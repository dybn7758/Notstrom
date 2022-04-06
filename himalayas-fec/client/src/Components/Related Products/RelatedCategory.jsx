import React from 'react';
import {category, currentProductByID} from '../../lib/Atoms.jsx';
import {useRecoilValue, useRecoilState} from 'recoil';


const RelatedCategory = (props) => {
const [categoryValue, setCategory] = useRecoilState(category);
const products = currentProductByID();

  return (
    <div>
      <h1 style={{margin: 2, position: 'absolute', top: 0, left: 10, fontSize: 14}}>{categoryValue}</h1>
    </div>
  )
}

export default RelatedCategory;
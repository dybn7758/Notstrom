import React from 'react';
import {name, currentProductByID, currentRelatedID} from '../../lib/Atoms.jsx';
import {useRecoilValue, useRecoilState} from 'recoil';

const RelatedName = (props) => {
  const [nameValue, setName] = useRecoilState(name);
  const products = currentProductByID();

  return (
    <div>
      <h1 style={{margin: 2, position: 'absolute', top: 20, left: 10, fontSize: 14, fontWeight: 'bold'}}>{nameValue}</h1>
    </div>
  )
}

export default RelatedName;
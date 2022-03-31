import React from 'react';
import RelatedCarousel from './RelatedCarousel.jsx';
import axios from 'axios';
import colorString from '../../App.jsx';
import {useRecoilState} from 'recoil';



export default class RelatedProducts extends React.Component {
  constructor(props) {
    super(props)

    // const [color, setString] = useRecoilState(colorString);

    // this.getData = this.getData.bind(this);
  }

  // getData() {
  //   const {product_id} =this.state;
  //   const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/:hr-rfe/products/product_id/related'
  //   const key = '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'
  //   const config = {headers: {Authorization: key}};
  //   axios.get(url, config)
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .catch((error) => {
  //     console.log(err);
  //   })
  // }

  render() {
  return (
      <div>
        <button onClick={ () => {
          console.log('help');
        }
        }>Test Button</button>
        <RelatedCarousel/>
      </div>
    )
  }
}


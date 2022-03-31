import React from 'react';
import RelatedProducts from './Components/Related Products/RelatedProducts.jsx';
import QA from './Components/Question_Answers/qa.jsx';
import {RecoilRoot, atom, selector} from 'recoil';



export default class App extends React.Component {
  constructor(props) {
    super(props);

    const colorString = atom({
      key: 'colorString',
      default: 'black',
    })
  }


  render () {
    return(
      <div> Himalayas For The Win
        <RecoilRoot>
          <RelatedProducts/>
          <QA/>
        </RecoilRoot>
      </div>
    )
  }

};

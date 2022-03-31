import React from 'react';
import RelatedProducts from './Components/Related Products/RelatedProducts.jsx';
import QA from './Components/Question_Answers/qa.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }


  render () {
    return(
      <div> Himalayas For The Win
        <RelatedProducts/>
        <QA/>
      </div>
    )
  }

};

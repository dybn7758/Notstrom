import React from 'react';
import RelatedProducts from './Components/Related Products/RelatedProducts.jsx';
//<<<<<<< HEAD
import Overview from './Components/Overview/Overview.jsx';
//=======
import QA from './Components/Question_Answers/qa.jsx';
//>>>>>>> 96c02372892adebee7914ffb443e8aaa19a2c866

 export default class App extends React.Component {
  constructor(props) {
    super(props);
  }


  render () {
    return(
      <div> Himalayas For The Win
        <Overview />
        <RelatedProducts/>
        <QA/>
      </div>
    )
  }

};

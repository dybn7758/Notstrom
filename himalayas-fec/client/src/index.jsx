import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  userRecoilValue,
} from 'recoil';
import ErrorBoundary from './ErrorBoundary.jsx';

var GlobalClickHandler = () => {
  const clickHandler = (event) => {
    //invoked whenever there is some click event on each component. this should update the state. i.e. object with the time, module, and element

    console.log('hi, you clicked me!');
  }

  return (
    <App onClick={() => {clickHandler()}}/>
  )
}

ReactDOM.render(
  <RecoilRoot>
    {/* <ErrorBoundary> */}
    <React.Suspense fallback={<div>Loading...</div>}>
      <GlobalClickHandler/>
        {/* <App /> */}

    </React.Suspense>
    {/* </ErrorBoundary> */}
  </RecoilRoot>,
  document.getElementById('root')
);

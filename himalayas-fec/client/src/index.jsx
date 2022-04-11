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

ReactDOM.render(
  <RecoilRoot>
    {/* <ErrorBoundary> */}
    <React.Suspense fallback={<div>Loading...</div>}>
      <App />
    </React.Suspense>
    {/* </ErrorBoundary> */}
  </RecoilRoot>,
  document.getElementById('root')
);

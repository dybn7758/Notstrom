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

ReactDOM.render(
  <RecoilRoot>
    <React.Suspense fallback={<div>testing</div>}>
      <App />
    </React.Suspense>
  </RecoilRoot>,
  document.getElementById('root')
);

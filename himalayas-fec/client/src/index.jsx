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

ReactDOM.render(<RecoilRoot><App /></RecoilRoot>, document.getElementById('root'));

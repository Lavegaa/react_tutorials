import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';        //main
import registerServiceWorker from './registerServiceWorker';       

ReactDOM.render(<App />, document.getElementById('root'));
//특정 id를 가진 DOM을 가져와 리액트 컴포넌트를 그린다. -> public/index.html id 'root, src/App.js
registerServiceWorker();

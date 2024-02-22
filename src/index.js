import React from 'react';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import state from '../redux/redux-store.js';
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));     
debugger;
let renderEntireTree=(state)=>{
root.render(
    <React.StrictMode>
      <App state={state} dispatch={store.dispatch.bind(store)}/>
    </React.StrictMode>
  );
}

renderEntireTree(state.getData());
store.subscribe(renderEntireTree);
reportWebVitals();
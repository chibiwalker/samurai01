import React from 'react';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import store from './redux/redux-store.js';
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));     
debugger;
let renderEntireTree=(state)=>{
root.render(
    <React.StrictMode>
      <App  state={state} dispatch={store.dispatch.bind(store) } store={store}/>
    </React.StrictMode>
  );
}

renderEntireTree(store.getState());

store.subscribe(()=>{
  let state=store.getState();
  renderEntireTree(state);
});
reportWebVitals();
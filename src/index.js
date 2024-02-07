import React from 'react';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import store from './data.js';
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));     
debugger;
let renderEntireTree=(data)=>{
root.render(
    <React.StrictMode>
    
      <App data={data} addPost={store.addPost} updatePost={store.updateNewPostText} addMessage={store.addMessage} updateMessage={store.updateMessage}/>
    </React.StrictMode>
  );
}

renderEntireTree(store.getData());
store.createObserver(renderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
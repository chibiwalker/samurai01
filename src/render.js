import React from 'react';
import './index.css';
import App from './App';
import { addPost, updateNewPostText } from './data.js';
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));     
export let renderEntireTree=(data)=>{

root.render(
    <React.StrictMode>
    
      <App data={data} addPost={addPost} updatePost={updateNewPostText}/>
    </React.StrictMode>
  );
}

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));  
    
let dialoguesData = [
  { name: "Lonely Wolf", id: "1" },
  { name: "Sad Girl", id: "2" },
  { name: "Ded Inside", id: "3" },
  { name: "Bro", id: "4" },
];
let messages = [
  "woooooooooo", "ha a ya bro wolf?", "loneliest than before......." 
]

root.render(
  <React.StrictMode>
    <App dd={dialoguesData} m={messages}/>
  </React.StrictMode>
);
 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
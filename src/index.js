import './index.css';
import reportWebVitals from './reportWebVitals';
import data from "./data.js"
import { renderEntireTree } from './render';

renderEntireTree(data);
// root.render(
//   <React.StrictMode>
  
//     <App data={data} addPost={addPost}/>
//   </React.StrictMode>
// );
 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
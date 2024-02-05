import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import NavBar from './components/nav/nav';
import Dialogues from './components/dialogues/Dialogues';
import {BrowserRouter,Route,Routes } from 'react-router-dom';
import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';
import Content from './components/profile/Profile';
function App(props) {
  return (
    <BrowserRouter>
    <div className="App">
      <div className="content-area">
         <Header/>
         <NavBar/>
        <div className='content'>
      <Routes>
        <Route path="/profile" element={<Content/>}/>
        <Route path="/dialogues/*" element={<Dialogues d={props.dd} m={props.m}/>}/> 
        <Route path="/news" element={<News/>}/> 
        <Route path="/music" element={<Music/>}/> 
        <Route path="/settings" element={<Settings/>}/> 
      </Routes> 
        </div>
         
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;

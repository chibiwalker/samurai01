import './App.css';
import Header from './components/header/Header';
import SideBar from './components/sidebar/sidebar';
import {BrowserRouter,Route,Routes } from 'react-router-dom';
import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';
import ProfileContainer from './components/profile/ProfileContainer';
import DialoguesContainer from './components/dialogues/DialoguesContainer';
function App(props) { 
  return (
    
    <BrowserRouter>
    <div className="App">
      <div className="content-area">
         <Header/>
         
         <SideBar u={props.state.Dialogues.users}/>
        <div className='content'>
          
      <Routes>
        <Route path="/profile" element={<ProfileContainer/>}/>
        <Route path="/dialogues/*" element={<DialoguesContainer/>}/> 
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

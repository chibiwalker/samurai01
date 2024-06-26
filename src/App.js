import './App.css';
import Header from './components/header/Header';
import {BrowserRouter,Route,Routes } from 'react-router-dom';
import UsersContainer from './components/users/UsersContainer';
import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';
import ProfileContainer from './components/profile/ProfileContainer';
import DialoguesContainer from './components/dialogues/DialoguesContainer';
import SideBarContainer from './components/sidebar/SidebarContainer';

function App() { 
  return (
    
    <BrowserRouter>
    <div className="App">
      <div className="content-area">
         <Header/>
         
         <SideBarContainer/>
        <div className='content'>
          
      <Routes>
        <Route path="/profile" element={<ProfileContainer/>}/>
        <Route path="/dialogues/*" element={<DialoguesContainer/>}/> 
        <Route path="/news" element={<News/>}/> 
        <Route path="/music" element={<Music/>}/> 
        <Route path="/settings" element={<Settings/>}/> 
        <Route path="/users" element={<UsersContainer/>}/>
      </Routes> 
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;

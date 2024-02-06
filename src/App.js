import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import SideBar from './components/sidebar/sidebar';
import Dialogues from './components/dialogues/Dialogues';
import {BrowserRouter,Route,Routes } from 'react-router-dom';
import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';
import Content from './components/profile/Profile';
function App(props) { 
  let dialoguesPage=props.data.dialoguesPage;
  let prPage=props.data.profilePage;
  return (
    
    <BrowserRouter>
    <div className="App">
      <div className="content-area">
         <Header/>
         
         <SideBar u={dialoguesPage.users}/>
        <div className='content'>
          
      <Routes>
        <Route path="/profile" element={<Content posts={prPage.posts} addPost={props.addPost} updatePost={props.updatePost}/>}/>
        <Route path="/dialogues/*" element={<Dialogues d={dialoguesPage.users} m={dialoguesPage.messages}/>}/> 
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

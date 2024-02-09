import './App.css';
import Header from './components/header/Header';
import SideBar from './components/sidebar/sidebar';
import Dialogues from './components/dialogues/Dialogues';
import {BrowserRouter,Route,Routes } from 'react-router-dom';
import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';
import Profile from './components/profile/Profile';
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
        <Route path="/profile" element={<Profile posts={prPage.posts} addPost={props.addPost} updatePost={props.updatePost} userInfo={prPage.personalData} postText={prPage.newPostText}/>}/>
        <Route path="/dialogues/*" element={<Dialogues d={dialoguesPage} m={dialoguesPage.messages} addMessage={props.addMessage} updateMessage={props.updateMessage}/>}/> 
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

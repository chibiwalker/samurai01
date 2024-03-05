import './App.css';
import Header from './components/header/Header';
import SideBar from './components/sidebar/sidebar';
import Dialogues from './components/dialogues/Dialogues';
import {BrowserRouter,Route,Routes } from 'react-router-dom';
import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';
import ProfileContainer from './components/profile/ProfileContainer';
function App(props) { 
  let dialoguesPage=props.state.Dialogues;
  let prPage=props.state.Profile;
  return (
    
    <BrowserRouter>
    <div className="App">
      <div className="content-area">
         <Header/>
         
         <SideBar u={dialoguesPage.users}/>
        <div className='content'>
          
      <Routes>
        {/* <Route path="/profile" element={<Profile posts={prPage.posts} dispatch={props.dispatch} userInfo={prPage.personalData} postText={prPage.newPostText}/>}/>
        <Route path="/dialogues/*" element={<Dialogues d={dialoguesPage} m={dialoguesPage.messages} dispatch={props.dispatch}/>}/>  */}
        <Route path="/profile" element={<ProfileContainer posts={prPage.posts} dispatch={props.dispatch} userInfo={prPage.personalData} postText={prPage.newPostText}/>}/>
        <Route path="/dialogues/*" element={<Dialogues d={dialoguesPage} m={dialoguesPage.messages} dispatch={props.dispatch}/>}/> 
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

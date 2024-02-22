import DialoguesReducer from "./redux/DialoguesReducer";
import ProfileReducer from "./redux/ProfileReducer";

let store = {
  _data: {
    dialoguesPage: {

      messages: [
        "woooooooooo", "ha a ya bro wolf?", "loneliest than before......."
      ],
      newMessageText: "",
      users: [{ name: "Saved Messages", id: "0", ava: '../../avatars/0.jpg' },
      { name: "Lonely Wolf", id: "1", ava: '../../avatars/1.jpg' },
      { name: "Sad Girl", id: "2", ava: '../../avatars/2.jpg' },
      { name: "Ded Inside", id: "3", ava: '../../avatars/3.jpg' },
      { name: "Bro", id: "4", ava: '../../avatars/4.jpg' }


      ]
    },
    users: [{ name: "Saved Messages", id: "0", ava: '../../avatars/0.jpg' },
    { name: "Lonely Wolf", id: "1", ava: '../../avatars/1.jpg' },
    { name: "Sad Girl", id: "2", ava: '../../avatars/2.jpg' },
    { name: "Ded Inside", id: "3", ava: '../../avatars/3.jpg' },
    { name: "Bro", id: "4", ava: '../../avatars/4.jpg' }],
    profilePage: {
      personalData: {
        id: 0,
        name: "John Ben Meszdt",
        ava: `./avatars/0.jpg`,
        info: "Once, I was a crusader for the Divine Order. I pledged my life to Lucian the Divine. But the war changed everything. He sent me to save the elves I grew up amongst. I arrived too late. Lucian ordered the use of Deathfog against the Black Ring, annihilating everyone I once knew in the process. Now, I'm a mercenary killer, one of the infamous Lone Wolves. And my next target is none other than Lucian's own son..."
      },
      posts: [
        { id: 0, message: "I am just a lonely wolf on a lonely road alone...", author: 0 },
        { id: 1, message: "A strong man is not the one who had never falled but who have falled, awakened, and go forward...", author: 0 },
        { id: 2, message: "May the road be your table cloth, stranger...", author: 0 }
      ],
      newPostText: ""
    }
  },
  _renderEntireTree() {
  },
  getData(){
    return this._data;
  },
  addPost() {
    let newPost = {
      id: this._data.profilePage.posts.length,
      message: this._data.profilePage.newPostText,
      author: 0
    }
    this._data.profilePage.posts.push(newPost);
    this.updateNewPostText("");
  },
  updateNewPostText(postText) {
    this._data.profilePage.newPostText = postText;
    this._renderEntireTree(this._data);
  },

  updateMessage(messageText) {
    this._data.dialoguesPage.newMessageText = messageText;
    this._renderEntireTree(this._data)
  },
  addMessage() {
    let messageText = this._data.dialoguesPage.newMessageText;
    this._data.dialoguesPage.messages.push(messageText);
    this.updateMessage("")

  },
  createObserver(observer) {
    this._renderEntireTree = observer;
  },
  dispatch(action){
    store.profilePage=ProfileReducer(store.profilePage,action);
    store.dialoguesPage=DialoguesReducer(store.dialoguesPage,action);
  }
}
export const addMessageActionCreator=()=>({type:"ADD-MESSAGE"});
export const updateMessageActionCreator=(newMessageText)=>({type:"UPDATE-MESSAGE", messageText:newMessageText});
export default store;
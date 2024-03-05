const ADD_POST="ADD-POST";
const UPDATE_POST="UPDATE-NEW-POST-TEXT";
let initialState={
    personalData:{
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
    newPostText: "TEST"
};
const ProfileReducer=(state=initialState,action)=>{
    switch (action.type){
    case ADD_POST:
        let newPost = {
            id: state.posts.length,
            message: state.newPostText,
            author: 0
          }
          state.posts.push(newPost);
          state.newPostText="";
        return state;
    case UPDATE_POST:
            state.newPostText = action.postText;
        return state;
    default:
        return state;
    }
}
export default ProfileReducer;

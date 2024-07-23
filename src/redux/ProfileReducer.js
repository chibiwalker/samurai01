const ADD_POST = "ADD-POST";
const UPDATE_POST = "UPDATE-NEW-POST-TEXT";
const SET_PROFILE = "SET_PROFILE";
let initialState = {
  profile: {
    id: 0,
    lookingForAJob: true,
    lookingForAJobDescription: "хочу много деняк и гибкий график",
    fullName: "Иоанн Моисеевич бен Месздт",
    contacts: {
      github: "sdsdasd",
      vk: "sdsdasd",
      facebook: "sdsdasd",
      instagram: "sdsdasd",
      twitter: "sdsdasd",
      website: "sdsdasd",
      youtube: "sdsdasd",
      mainLink: "sdsdasd",
    },
    photos: {
      small: `./avatars/0.jpg`,
      large: `./avatars/0.jpg`,
    },
  },
  personalData: {
    id: 0,
    name: "John Ben Meszdt",
    ava: `./avatars/0.jpg`,
    info: "Once, I was a crusader for the Divine Order. I pledged my life to Lucian the Divine. But the war changed everything. He sent me to save the elves I grew up amongst. I arrived too late. Lucian ordered the use of Deathfog against the Black Ring, annihilating everyone I once knew in the process. Now, I'm a mercenary killer, one of the infamous Lone Wolves. And my next target is none other than Lucian's own son...",
  },
  posts: [
    {
      id: 0,
      message: "I am just a lonely wolf on a lonely road alone...",
      author: 0,
    },
    {
      id: 1,
      message:
        "A strong man is not the one who had never falled but who have falled, awakened, and go forward...",
      author: 0,
    },
    {
      id: 2,
      message: "May the road be your table cloth, stranger...",
      author: 0,
    },
  ],
  newPostText: "",
};
const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let stateCopy = { ...state };
      stateCopy.posts = [...state.posts];
      let newPost = {
        id: stateCopy.posts.length,
        message: stateCopy.newPostText,
        author: 0,
      };
      stateCopy.posts.push(newPost);
      stateCopy.newPostText = "";
      return stateCopy;
    }
    case UPDATE_POST: {
      let stateCopy = { ...state };
      stateCopy.newPostText = action.postText;
      return stateCopy;
    }
    case SET_PROFILE: {
      return { ...state, profile: action.profile };
    }
    default:
      return state;
  }
};
export const setProfile = (profile) => ({ type: SET_PROFILE, profile });
export const addPost = () => ({ type: "ADD-POST" });
export const updatePost = (postText) => ({
  type: "UPDATE-NEW-POST-TEXT",
  postText,
});
export default ProfileReducer;

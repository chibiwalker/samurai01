const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_FRIENDS = "SET_FRIENDS";
const SELECT_PAGE = "SELECT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOOGLE_PRELOADER = "TOOGLE_PRELOADER";
let initialState = {
  totalCount: 0,
  page: 1,
  isFetching: true,
  friends: [],
  users: [
    {
      name: "Saved Messages",
      id: 0,
      uniqueUrlName: null,
      photos: {
        small: "../../avatars/0.jpg",
        large: null,
      },
      status: "Bounty Hunter from Lone Wolves",
      followed: true,
    },
    {
      name: "Lonely Wolf",
      id: 1,
      uniqueUrlName: null,
      photos: {
        small: "../../avatars/1.jpg",
        large: null,
      },
      status: "Just a lonely wolf on a lonely road alone",
      followed: true,
    },
    {
      name: "sadgirl",
      id: 2,
      uniqueUrlName: null,
      photos: {
        small: "../../avatars/2.jpg",
        large: null,
      },
      status: "Pop-musician from Lawse",
      followed: true,
    },
    {
      name: "Ded Inside",
      id: 3,
      uniqueUrlName: null,
      photos: {
        small: "../../avatars/3.jpg",
        large: null,
      },
      status: "The last living unded inside and outside too",
      followed: true,
    },
    {
      name: "Bro",
      id: 4,
      uniqueUrlName: null,
      photos: {
        small: "../../avatars/4.jpg",
        large: null,
      },
      status: "Noble citizen from famous Gorin's house",
      followed: true,
    },
  ],
};

const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      const newState = {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
      console.log(newState);
      return newState;
    }

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) return { ...u, followed: false };
          return u;
        }),
      };
    case SET_USERS: {
      return { ...state, users: [...initialState.users, ...action.users] };
    }
    case SET_FRIENDS: {
      return { ...state, friends: [...initialState.users, ...action.users] };
    }
    case SELECT_PAGE: {
      return { ...state, page: action.page };
    }
    case SET_TOTAL_COUNT: {
      return { ...state, totalCount: action.totalCount };
    }
    case TOOGLE_PRELOADER: {
      return { ...state, isFetching: action.isFetching };
    }
    default:
      return state;
  }
};

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const SetUsers = (users) => ({ type: SET_USERS, users });
export const setTotalCount = (totalCount) => ({
  type: SET_TOTAL_COUNT,
  totalCount,
});
export const SelectPage = (page) => ({ type: SELECT_PAGE, page });
export const tooglePreloader = (isFetching) => ({
  type: TOOGLE_PRELOADER,
  isFetching,
});

export default UsersReducer;

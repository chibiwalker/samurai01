const FOLLOW="FOLLOW";
const UNFOLLOW="UNFOLLOW";
const SET_USERS="SET_USERS";
// let followAC=(userId)=>{return {type:FOLLOW, userId}};
// let unfollowAC=(userId)=>{return {type:UNFOLLOW, userId}};
// let setUsersAC=(users)=>{return {type:SET_USERS, users}};
let initialState={
    users:[
        {
            "name": "Saved Messages",
            "id": 0,
            "uniqueUrlName": null,
            "photos": {
                "small": '../../avatars/0.jpg',
                "large": null
            },
            "status": "Bounty Hunter from Lone Wolves",
            "followed": true
        },
        {
            "name": "Lonely Wolf",
            "id": 1,
            "uniqueUrlName": null,
            "photos": {
                "small": '../../avatars/1.jpg',
                "large": null
            },
            "status": "Just a lonely wolf on a lonely road alone",
            "followed": true
        },
        {
            "name": "sadgirl",
            "id": 2,
            "uniqueUrlName": null,
            "photos": {
                "small": '../../avatars/2.jpg',
                "large": null
            },
            "status": "Pop-musician from Lawse",
            "followed": true
        },
        {
            "name": "Ded Inside",
            "id": 3,
            "uniqueUrlName": null,
            "photos": {
                "small":'../../avatars/3.jpg',
                "large": null
            },
            "status": "The last living unded inside and outside too",
            "followed": true
        },
        {
            "name": "Bro",
            "id": 4,
            "uniqueUrlName": null,
            "photos": {
                "small":'../../avatars/4.jpg',
                "large": null
            },
            "status": "Noble citizen from famous Gorin's house" ,
            "followed": true
        }
        ]}
    
const UsersReducer = (state=initialState, action) => {
    switch (action.type) {
        case FOLLOW:{
            const newState={...state,
                users: state.users.map(u=>{
                    if (u.id === action.userId){
                        return {...u, followed: true}}
                    return u;
            })
        };
        console.log(newState);
            return newState;}
            
        case UNFOLLOW:
            return{
                ...state,
                users: state.users.map(u=>{
                    if (u.id === action.userId)
                        return {...u, followed:false}
                return u;
        })
    };
        case SET_USERS:{
        //     if (state.users.at(-1)===action.users.at(-1)){
        //     console.log('callUagain')
        //     return {...state, users:[...state.users]}}
        // else{console.log(state.users.at(-1))
        //     console.log(action.users.at(-1))
                return {...state, users:[...initialState.users, ...action.users]
                }
            };
        default:
            return state;
    }
}
export default UsersReducer;
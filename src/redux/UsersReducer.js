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
            "status": null,
            "followed": false
        },
        {
            "name": "Lonely Wolf",
            "id": 1,
            "uniqueUrlName": null,
            "photos": {
                "small": '../../avatars/1.jpg',
                "large": null
            },
            "status": null,
            "followed": false
        },
        {
            "name": "sadgirl",
            "id": 2,
            "uniqueUrlName": null,
            "photos": {
                "small": '../../avatars/2.jpg',
                "large": null
            },
            "status": null,
            "followed": false
        },
        {
            "name": "Ded Inside",
            "id": 3,
            "uniqueUrlName": null,
            "photos": {
                "small":'../../avatars/3.jpg',
                "large": null
            },
            "status": null,
            "followed": false
        }
        ]}
    
const UsersReducer = (state=initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            alert("follow")
            return {
            ...state,
            users: state.users.map(u=>{
                if (u.id === action.userId)
                    return {...u, followed: true}
                return u;
        })
    };
        case UNFOLLOW:
            alert("unfollow")
            return{
                ...state,
                users: state.users.map(u=>{
                    if (u.id === action.userId)
                    return {...u, followed:false}
                return u;
        })
    };
        case SET_USERS:{
                return {...state, users:[...state.users, ...action.users]}
            };
        default:
            return state;
    }
}
export default UsersReducer;
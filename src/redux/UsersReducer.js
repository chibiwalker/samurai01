let initialState=
    { name: "Saved Messages", id: "0", ava: '../../avatars/0.jpg', bio:"default text" }
    // { name: "Lonely Wolf", id: "1", ava: '../../avatars/1.jpg',  bio:"default text" },
    // { name: "Sad Girl", id: "2", ava: '../../avatars/2.jpg',  bio:"default text" },
    // { name: "Ded Inside", id: "3", ava: '../../avatars/3.jpg', bio:"default text" },
    // { name: "Bro", id: "4", ava: '../../avatars/4.jpg' }
    ;
const UsersReducer = (state=initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
export default UsersReducer;
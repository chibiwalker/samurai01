let initialState={
    users:[{ name: "Saved Messages", id: "0", ava: '../../avatars/0.jpg', bio:"Bounty Hunter from Lone Wolves" },
    { name: "Lonely Wolf", id: "1", ava: '../../avatars/1.jpg',  bio:"Just a lonely wolf on a lonely road alone" },
    { name: "Sad Girl", id: "2", ava: '../../avatars/2.jpg',  bio:"Pop-musician from Lawse" },
    { name: "Ded Inside", id: "3", ava: '../../avatars/3.jpg', bio:"The last living unded inside and outside too" },
    { name: "Bro", id: "4", ava: '../../avatars/4.jpg', bio:"Noble citizen from famous Gorin's house" }
    ]}
const UsersReducer = (state=initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
export default UsersReducer;
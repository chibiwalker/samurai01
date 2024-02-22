const ADD_MESSAGE="ADD-MESSAGE";
const UPDATE_MESSAGE="UPDATE-NEW-MESSAGE-TEXT";
let initialState={

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
  };
const DialoguesReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let messageText = state.newMessageText;
            state.messages.push(messageText);
            state.newMessageText="";
            return state;
        case UPDATE_MESSAGE:
            state.newMessageText=action.messageText;
            return state;
        default:
            return state;
    }
}
export default DialoguesReducer;
import React, { useEffect } from "react";
import s from "./Dialogues.module.css";
import Dialogue from "./Dialogue/Dialogue";
import Messages from "./Messages/Messages";
import axios from "axios";
const Dialogues = (props) => {
  let newMessage = React.createRef();
  let updateMessage = () => {
    let text = newMessage.current.value;
    props.updateMessage(text);
  };
  let addMessage = () => {
    props.addMessage();
  };
  let printMessages = props.m.map((m) => <Messages message={m} />);
  useEffect(() => {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users?friend=true")
      .then((response) => {
        props.SetFriends(response.data.items);
      });
  }, []);
  let printDialogues = props.u.map((user) => (
    <Dialogue name={user.name} id={user.id} ava={user.photos.small} />
  ));
  return (
    <div className={s.dialoguesWindow}>
      <div className={s.dialogue}>{printDialogues}</div>
      <div className={s.messages}>
        {printMessages}
        <textarea
          onChange={updateMessage}
          ref={newMessage}
          value={props.d.newMessageText}
          cols="50"
        ></textarea>
        <button onClick={addMessage}>Send</button>
      </div>
    </div>
  );
};
export default Dialogues;

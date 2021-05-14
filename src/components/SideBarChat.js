import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/SideBarChat.css";
import db from "../firebase";

const Chat = ({ key, id, data, addNewChat }) => {
  const [avatar, setAvatar] = useState("");
  const [messages, setMessages] = useState("");

  const createChat = () => {
    const roomName = prompt("Please enter the room for chat");
    if (roomName) {
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };

  useEffect(() => {
    if (id) {
      db.collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
    console.log(messages);
  }, [id]);

  useEffect(() => {
    setAvatar(Math.floor(Math.random() * 5000));
  }, []);
  return !addNewChat ? (
    <Link
      to={`/rooms/${id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div className="sideBarChat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${avatar}.svg`} />
        <div className="sideBarChat_info">
          <h3>{data}</h3>
          <p>{messages[0]?.message}</p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className="sideBarChat newHover">
      <h2 class="add_chat">ADD NEW CHAT</h2>
    </div>
  );
};

export default Chat;

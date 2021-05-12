import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "../css/SideBarChat.css";

const Chat = () => {
  const [avatar, setAvatar] = useState("");
  useEffect(() => {
    setAvatar(Math.floor(Math.random() * 5000));
  }, []);
  return (
    <div className="sideBarChat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${avatar}.svg`} />
      <div className="sideBarChat_info">
        <h3>Room name</h3>
        <p>Last message...</p>
      </div>
    </div>
  );
};

export default Chat;

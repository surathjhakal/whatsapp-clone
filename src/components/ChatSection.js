import { Avatar, IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "../css/ChatSection.css";
import SearchIcon from "@material-ui/icons/Search";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MicIcon from "@material-ui/icons/Mic";

const ChatSection = () => {
  const [avatar, setAvatar] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    setAvatar(Math.floor(Math.random() * 100));
  }, []);
  const sendMessage = (e) => {
    e.preventDefault();
    setInput("");
  };
  return (
    <div className="chatSection">
      <div className="chatSection_header">
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar
            src={`https://avatars.dicebear.com/api/human/${avatar}.svg`}
          />
          <div style={{ paddingLeft: "10px" }}>
            <h3>Surath Jhakal</h3>
            <p>Last seen at ...</p>
          </div>
        </div>
        <div>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chatSection_messages">
        <p className="chatSection_message chat_reciever">
          <span className="chatSection_name">Surath</span>
          Hey Guys
          <span className="chatSection_timestamp">12:14am</span>
        </p>
      </div>
      <div className="chatSection_footer">
        <IconButton style={{ flex: "0.05" }}>
          <InsertEmoticonIcon />
        </IconButton>
        <IconButton style={{ flex: "0.05" }}>
          <AttachFileIcon />
        </IconButton>
        <form style={{ flex: "0.85", marginRight: "16px" }}>
          <input
            value={input}
            className="message_input"
            placeholder="Type a message"
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            onClick={sendMessage}
            style={{ display: "none" }}
          >
            Send
          </button>
        </form>
        <IconButton style={{ flex: "0.05" }}>
          <MicIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default ChatSection;

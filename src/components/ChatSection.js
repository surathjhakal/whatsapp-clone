import { Avatar, IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "../css/ChatSection.css";
import SearchIcon from "@material-ui/icons/Search";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MicIcon from "@material-ui/icons/Mic";
import db from "../firebase";
import { useParams } from "react-router";
import { useStateValue } from "../StateProvider";

const ChatSection = () => {
  const [avatar, setAvatar] = useState("");
  const [input, setInput] = useState("");
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState([]);
  const [{ user }, disptach] = useStateValue();

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapShot) => setRoomName(snapShot.data().name));
    }
    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setMessages(snapshot.docs.map((doc) => doc.data()))
      );
    setAvatar(Math.floor(Math.random() * 100));
  }, [roomId]);

  const getTime = (time) => {
    let n = new Date(`"${time}"`);
    return n.toLocaleString();
  };

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .add({
        message: input,
        name: user.displayName,
        timestamp: `"${new Date()}"`,
      });
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
            <h3>{roomName}</h3>
            <p>
              Last Seen :{" "}
              {messages[messages.length - 1]?.timestamp
                ? getTime(messages[messages.length - 1].timestamp)
                : "None"}
            </p>
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
        {messages.map((message) => (
          <p
            className={`chatSection_message ${
              message.name == user.displayName && "chat_reciever"
            }`}
          >
            <span className="chatSection_name">{message.name}</span>
            {message.message}
            <span className="chatSection_timestamp">
              {getTime(message.timestamp)}
            </span>
          </p>
        ))}
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

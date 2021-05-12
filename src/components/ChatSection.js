import { Avatar, IconButton } from "@material-ui/core";
import React from "react";
import "../css/ChatSection.css";
import SearchIcon from "@material-ui/icons/Search";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import AttachFileIcon from "@material-ui/icons/AttachFile";

const ChatSection = () => {
  return (
    <div className="chatSection">
      <div className="chatSection_header">
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar />
          <p style={{ paddingLeft: "5px", fontSize: "1.1rem" }}>
            Surath Jhakal
          </p>
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
        <h1>messages</h1>
      </div>
      <div className="chatSection_footer">
        <IconButton>
          <InsertEmoticonIcon />
        </IconButton>
        <IconButton>
          <AttachFileIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default ChatSection;

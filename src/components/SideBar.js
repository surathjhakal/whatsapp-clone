import React, { useEffect, useState } from "react";
import SideBarChat from "./SideBarChat";
import "../css/SideBar.css";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import NotificationsOffIcon from "@material-ui/icons/NotificationsOff";
import SearchIcon from "@material-ui/icons/Search";
import db from "../firebase";
import { useStateValue } from "../StateProvider";

const SideBar = () => {
  const [{ user }, disptach] = useStateValue();
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    const data = db.collection("rooms").onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
    return () => {
      data();
    };
  }, []);
  // console.log(rooms, "hello");
  return (
    <div className="sideBar">
      <div className="sideBar_header">
        <IconButton>
          <Avatar src={user?.photoURL} />
        </IconButton>
        <div className="sideBar_header_right">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sideBar_notify">
        <div className="sideBar_notify_left">
          <NotificationsOffIcon />
        </div>
        <div className="sideBar_notify_right">
          <p style={{ fontSize: "1.1rem", paddingBottom: "4px" }}>
            Get notified of new messages
          </p>
          <p style={{ fontSize: "0.9rem" }}>Turn on desktop notifications </p>
        </div>
      </div>
      <div className="sideBar_search">
        <div className="sideBar_search_inner">
          <SearchIcon />
          <input
            className="search_bar"
            type="text"
            placeholder="Search or start new chat"
          />
        </div>
      </div>
      <div className="sideBar_chats">
        <SideBarChat addNewChat />
        {rooms.map((room) => (
          <SideBarChat key={room.id} id={room.id} data={room.data.name} />
        ))}
      </div>
    </div>
  );
};

export default SideBar;

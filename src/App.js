import "./App.css";
import ChatSection from "./components/ChatSection";
import SideBar from "./components/SideBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./components/Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, disptach] = useStateValue();
  return (
    <div className="app">
      <div className="app_header"></div>
      {!user ? (
        <Login />
      ) : (
        <div className="app_content">
          <Router>
            <SideBar />
            <Switch>
              <Route path="/rooms/:roomId">
                <ChatSection />
              </Route>
              <Route path="/">
                {/* <ChatSection /> */}
                <h1>chat</h1>
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;

import "./App.css";
import ChatSection from "./components/ChatSection";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="app">
      <div className="app_header"></div>
      <div className="app_content">
        <div className="app_content_left">
          <SideBar />
        </div>
        <div className="app_content_right">
          <ChatSection />
        </div>
      </div>
    </div>
  );
}

export default App;

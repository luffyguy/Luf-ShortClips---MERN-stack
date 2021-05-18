import "./App.css";
import Header from "./components/Header/Header";
import Video from "./components/Video/Video";

function App() {
  return (
    <div className="app-Container">
      <Header />
      <div className="app">
        <div className="app__video">
          <Video
            url="https://i.imgur.com/9mCBcEJ.mp4"
            userName="Harsh"
            description="Hero"
            likes={100}
          />
          <Video
            url="https://i.imgur.com/9mCBcEJ.mp4"
            userName="Harsh"
            description="Hero"
            likes={169}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

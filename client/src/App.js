import "./App.css";
import Header from "./components/Header/Header";
import Video from "./components/Video/Video";

function App() {
  return (
    <div className="app-Container">
      <Header />
      <div className="app">
        <div className="app__video">
          <Video />
          <Video />
        </div>
      </div>
    </div>
  );
}

export default App;

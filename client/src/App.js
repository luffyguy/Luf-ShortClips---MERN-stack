import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Video from "./components/Video/Video";
import axios from "./axios";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v2/posts");
      setVideos(response.data);
      return response;
    }
    fetchPosts();
  }, []);

  console.log(videos);

  return (
    <div className="app-Container">
      <Header />
      <div className="app">
        <div className="app__video">
          {videos.map(({url, userName, description, likes}) => (
            <Video
            url= {url}
            userName= {userName}
            description={description}
            likes={likes}
          />
          ))}
          
        </div>
      </div>
    </div>
  );
}

export default App;

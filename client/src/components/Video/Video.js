import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter/VideoFooter";
import VideoUpvote from "./VideoUpvote/VideoUpvote";

const Video = ({ url, userName, description, likes }) => {
  const [playing, setPlaying] = useState(false);

  const videoRef = useRef(null);

  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        onClick={handleVideoPress}
        className="video__player"
        loop
        ref={videoRef}
        src={url}
      ></video>
      <VideoFooter userName={userName} description={description} />
      <VideoUpvote likes={likes} />
    </div>
  );
};

export default Video;

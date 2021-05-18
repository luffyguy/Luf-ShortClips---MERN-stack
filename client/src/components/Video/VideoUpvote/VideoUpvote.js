import React, { useState } from "react";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import IconButton from "@material-ui/core/IconButton";
import "./VideoUpvote.css";

const VideoUpvote = ({ likes }) => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [count, setCount] = useState(likes);

  const likedHandleClick = () => {
    if (liked == true) {
      setLiked(false);
      setDisliked(false);
      setCount(count - 1);
    } else {
      setLiked(true);
      setDisliked(false);
      setCount(count + 1);
    }
  };
  const dislikedHandleClick = () => {
    if (disliked == true) {
      setDisliked(false);
      setLiked(false);
      setCount(count + 1);
    } else {
      setDisliked(true);
      setLiked(false);
      setCount(count - 1);
    }
  };

  return (
    <div className="upVote">
      <div className="upVote__button">
        <IconButton>
          {liked ? (
            <ThumbUpIcon
              fontSize="medium"
              className="up__button__true"
              onClick={likedHandleClick}
            />
          ) : (
            <ThumbUpIcon
              fontSize="medium"
              className="up__button"
              onClick={likedHandleClick}
            />
          )}
        </IconButton>
      </div>
      <p className="upVote__count">{count}</p>
      <div className="upVote__button">
        <IconButton>
          {disliked ? (
            <ThumbDownIcon
              fontSize="medium"
              className="down__button__true"
              onClick={dislikedHandleClick}
            />
          ) : (
            <ThumbDownIcon
              fontSize="medium"
              className="down__button"
              onClick={dislikedHandleClick}
            />
          )}
        </IconButton>
      </div>
    </div>
  );
};

export default VideoUpvote;

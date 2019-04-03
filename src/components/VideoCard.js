import './VideoCard.css';
import React from 'react';

// {video} is a destructuring of the props object
const VideoCard = ({video, onVideoSelect}) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-card item">
      <img alt={video.snippet.title}
           className="ui image"
           src={video.snippet.thumbnails.medium.url}/>
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoCard;

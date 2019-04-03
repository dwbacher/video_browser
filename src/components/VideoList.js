import React from 'react';
import VideoCard from './VideoCard';

const VideoList = ({ videos, onVideoSelect }) => {

  const videoCards = videos.map(video => {
    return <VideoCard key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />;
  });

  return <div className="ui relaxed divided list">{videoCards}</div>;

};

export default VideoList;

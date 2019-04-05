import React from 'react';
import VideoCard from './VideoCard';
import { connect } from 'react-redux';

class VideoList extends React.Component {

  render() {
    const videoCards = this.props.videos.map(video => {
      return <VideoCard key={video.id.videoId} video={video} />;
    });

    return <div className="ui relaxed divided list">{videoCards}</div>;
  }

}

const mapStateToProps = state => {
  return { videos: state.videos };
}

export default connect(mapStateToProps)(VideoList);


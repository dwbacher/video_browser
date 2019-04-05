import React from 'react';
import { connect } from 'react-redux';

class VideoScreen extends React.Component {

  render() {
    const selectedVideo = this.props.selectedVideo;

    if (!selectedVideo) {
      return <div>Loading...</div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;
    return (
      <div>
        <div className="ui embed">
          <iframe title="Video Player" src={videoSrc}></iframe>
        </div>
        <div className="ui segment">
          <h4 className="ui header">{selectedVideo.snippet.title}</h4>
          <p className="">{selectedVideo.snippet.description}</p>
        </div>
      </div>
    );

  }
}

const mapStateToProps = state => {
  return { selectedVideo: state.selectedVideo };
}

export default connect(mapStateToProps)(VideoScreen);

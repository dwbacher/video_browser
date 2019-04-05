import './VideoCard.css';
import React from 'react';
import { connect } from 'react-redux';
import { selectVideo } from "../actions";

class VideoCard extends React.Component {
  render() {
    return (
      <div onClick={() => this.props.selectVideo(this.props.video)} className="video-card item">
        <img alt={this.props.video.snippet.title}
             className="ui image"
             src={this.props.video.snippet.thumbnails.medium.url}/>
        <div className="content">
          <div className="header">{this.props.video.snippet.title}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { selectedVideo: state.selectedVideo };
}
export default connect(mapStateToProps, { selectVideo })(VideoCard);

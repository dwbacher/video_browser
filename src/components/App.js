import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoScreen from './VideoScreen';
import {connect} from "react-redux";
import { selectVideo, listVideos } from "../actions";

class App extends React.Component {

  componentDidMount() {
    this.onSearchSubmit('news');
  }

  onSearchSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    this.props.selectVideo(response.data.items[0]);
    this.props.listVideos(response.data.items);

  };

  render() {
    return(
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoScreen />
            </div>
            <div className="five wide column">
              <VideoList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return { selectedVideo: state.selectedVideo, videos: state.videos };
}

export default connect(mapStateToProps, { selectVideo, listVideos })(App);

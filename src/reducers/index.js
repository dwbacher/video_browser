import { combineReducers } from 'redux';

const videosReducer = (videos=[], action) => {

  if(action.type === 'VIDEO_LIST') {
    return action.payload;
  }
  return videos;
}

const selectedVideoReducer = (selectedVideo=null, action) => {
  if(action.type === 'SELECTED_VIDEO') {
    return action.payload;
  }
  return selectedVideo;
}

const searchTermReducer = (searchTerm='news', action) => {
  if(action.type === 'SEARCH_TERM') {
    return action.payload;
  }
  return searchTerm;
}

export default combineReducers({
  searchTerm: searchTermReducer,
  videos: videosReducer,
  selectedVideo: selectedVideoReducer
});

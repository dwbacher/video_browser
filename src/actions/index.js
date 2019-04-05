// Action creator

export const enterSearchTerm = term => {

  // Return an actions
  return {
    type: 'SEARCH_TERM',
    payload: term
  };

};


export const selectVideo = video => {

  // Return an actions
  return {
    type: 'SELECTED_VIDEO',
    payload: video
  };

};


export const listVideos = videos => {

  return {
    type: 'VIDEO_LIST',
    payload: videos
  };

};

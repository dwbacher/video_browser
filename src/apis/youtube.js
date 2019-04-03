import axios from 'axios';

const KEY = 'AIzaSyBhnT_iFpSFP6B7Y5iJ67U_tA22-viLgZg';


export default axios.create({

  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    maxResults: 5,
    part: 'snippet',
    key: KEY
  }

});

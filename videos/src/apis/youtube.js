
import axios from 'axios';

const KEY = 'AIzaSyDAiQwyzkIY2ul1fQ1rgnvS93iD-GnuaRk';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,

  }
});

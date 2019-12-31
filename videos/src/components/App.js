import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = {videos: [], selectedVideo: null};

  componentDidMount() {
    this.onTermSubmit('Buildings');
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    const items =  response.data.items;
    this.setState({videos: items,
      selectedVideo: items.length === 0 ? null: items[0]});
  };

  onVideoSelect = (video) => {
    this.setState({selectedVideo: video})
  };

  render() {
    return <div className="ui container">
      <SearchBar onSubmit={this.onTermSubmit}/>
      <div className="ui grid">
        <div className="ui row">
          {/*I have {this.state.videos.length} videos*/}
          <div className={"eleven wide column"}>
            <VideoDetail video={this.state.selectedVideo} />
          </div>
          <div className={"five wide column"}>
            <VideoList onVideoSelect={this.onVideoSelect}
                       videos={this.state.videos}/>
          </div>

        </div>
      </div>

    </div>
  }
}

export default App;

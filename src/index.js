import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCA3XYgTTHWSon_4UUOI7wRHqk2Sp8lD6c';

// Create new component that should produce some HTML

class App extends Component {

  // Set-up constructor function. constructor always gets props.
  constructor (props)  {
    super (props);

    // when the app starts the selectedVideois set to null, nothing has been selected yet
    this.state = {
      videos: [],
      selectedVideo: null
    };

    // request is sent to grab list of videos, when rquest is complete we pass a list of videos to this.state.videos and first video in that list will be set to selectedVideo.
    YTSearch ({ key: API_KEY, term: 'pugs'}, (videos) => {
      console.log(videos);

      // when you have a key & value with the same name, you can condense videos: videos to be just videos.
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  // since we're setting state the page re-renders, VideoDetail is rendering again with this.state.selectedVideo which is now equal to the first video.
      // if VideoList calls this function then selectedVideo on App is going to update. Passing a property to VideoList.

  render () {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    );
  }
}


// Take the component's HTML and render in the DOM

ReactDom.render (<App />, document.querySelector('.container'));

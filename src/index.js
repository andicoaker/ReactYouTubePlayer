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

    this.state = { videos: [] };

    YTSearch ({ key: API_KEY, term: 'pugs'}, (videos) => {
      console.log(videos);

      // when you have a key & value with the same name, you can condense videos: videos to be just videos.
      this.setState({ videos });
    });
  }

  render () {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}


// Take the component's HTML and render in the DOM

ReactDom.render (<App />, document.querySelector('.container'));

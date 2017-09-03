import _ from 'lodash';
  // use _ instead of Lodash
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

    this.videoSearch ('pugs');
  }

  // removed YTSearch from constructor and moved it down to it's own item. we still want an initial item to show up when the page is initiall rendered, so we added this.videoSearch to the constructor above.

  //

  videoSearch (term){
    YTSearch ({ key: API_KEY, term: term}, (videos) => {
      // console.log(videos);
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  // since we're setting state the page re-renders, VideoDetail is rendering again with this.state.selectedVideo which is now equal to the first video.
      // if VideoList calls this function then selectedVideo on App is going to update. Passing a property to VideoList.

  //when SearchBar below calls onSearchTermChange it will use the term string which will be sent to this.videoSearch in the constructor above. The term will pop-up and perform the YT search.

  // Installed Lodash. created videoSearch method using Lodash debounce. debounce returns a function that can only be run every 300 milliseconds (or what ever amount of time we specify). it can be called multiple times, but will only run and render every 300 milliseconds.
  // Updated SearchBar onSearchTermChange to pass the newly created videoSearch function.

  render () {

    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
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

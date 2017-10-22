import React, { Component } from 'react'; // needed to use react components
import ReactDOM from 'react-dom'; // needed to put it on the DOM
import YTSearch from 'youtube-api-search';
import _ from 'lodash'; // this throttles the input

// Need file reference because we are writing it.
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// YouTube API Key
const API_KEY = 'AIzaSyDQgQq9lMlzWO4mY4pbAvb11toHVvgTdOA';

// Create a new component. This component should produce
// some HTML
// JSX makes our components a lot cleaner to look at
// JSX allows us to create HTML within JavaScript
// however this has to be transpiled with Babel
class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('soccer');
  }
  // callback function for searchbar
  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, videos => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
      // this.setState({ videos: videos });
      // ES6 condenses this to just videos because same name for key and value
    });
  }
  // passing data from App to VideoList is simple
  // we just pass the props
  // this function will still try to render itself
  // even if the state.videos is initially empty
  // We only want to call the function onSearchTermChange when we're done
  // searching
  render (){
    // we created a function and passed it to debounce
    // returns a new function that can only be called once
    // every 300 milliseconds
    const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);
    
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

// Take this component's generated HTML and put it on the page
// (this really means in the DOM)

// we need to pass an instance of the class App
// we also need the target DOM node which serves as the
// root node of the application
ReactDOM.render(<App />, document.querySelector('.container'));

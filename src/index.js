import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const API_KEY = // your own KEY here

// Createa a new component. This component should produce some html.
class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.videoSearch('club atletico tucuman')
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      //this.setState({videos: 'videos'}) we can do this since the key and the property have the same variable name  
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    })
  }
  
  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={ this.state.videos } />
      </div>
    );
  }
}

// Take this component's generated html and put it on the page (DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
import React, { Component } from 'react';
import { connect } from 'react-redux'
import fetchVideos from './actions'
import { bindActionCreators} from 'redux'
import MainComponent from './MainComponent'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.findVideos = this.findVideos.bind(this)
  }

  findVideos(event){
    event.preventDefault();
    let searchTerm = event.target.children[0].value
    console.log(searchTerm);
    debugger
    this.props.findVids(searchTerm)
  }

  render() {
    let display = ''
    if(this.props.videos.length > 0){
      display = <MainComponent video={this.props.videos[0]} />
    }
    debugger
    return (
      <div className="App">
        <form onSubmit={this.findVideos}>
          <input type='text' placeholder='Enter your seach term here' />
          <button type='submit'>Search</button>
        </form>
        <div>
          {display}
        </div>
      </div>

    );
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({ findVids: fetchVideos}, dispatch)
}
function mapStateToProps(state){
  return { videos: state.reducer }
}




export default connect(mapStateToProps, mapDispatchToProps)(App)

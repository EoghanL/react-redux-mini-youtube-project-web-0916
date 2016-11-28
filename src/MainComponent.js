import React from 'react'
export default class MainComponent extends React.Component{
  render(){
    return (
      <div>
        <h3>{this.props.video.snippet.channelTitle}</h3>
        <p>{this.props.video.snippet.description}</p>
        <img src={this.props.video.snippet.thumbnails.default.url} alt='0'/>
      </div>
    )
  }
}

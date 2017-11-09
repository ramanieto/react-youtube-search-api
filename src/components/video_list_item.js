import React from 'react'

// When we use the curly braces inside of the argument parenthesis we tell react that the 
//first argument object has a property video, and that we want to assign it to a const named video 
const VideoListItem = ({video, onVideoSelect}) => {
  // const video = props.video - explained aboved
  const imageUrl = video.snippet.thumbnails.default.url
  const title = video.snippet.title
  
  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{title}</div>
        </div>  
      </div>
    </li>
  )
}

export default VideoListItem
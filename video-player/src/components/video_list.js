// This can be a plain functional component
import React from 'react';
import VideoListItem from './video_list_item';

// CSS uses className to define a CSS class
// in functional component props is available
// only in the function
// in class based component, we need to access props
// as this.props
const VideoList = (props) => {
  // Returns an array of JSX li tags with videos in them
  // Each array element should have its own unique key
  const videoItems = props.videos.map((video) => {
    return <VideoListItem
              onVideoSelect={props.onVideoSelect}
              key={video.etag}
              video={video}
            />
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;

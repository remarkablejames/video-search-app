import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        onVideoSelect={onVideoSelect}
        video={video}
        key={video.id.videoId}
      />
    );
  });
  return (
    <div className="ui relaxed divided list">
      <h2>Retrieved results</h2> {renderedList}
    </div>
  );
};

export default VideoList;

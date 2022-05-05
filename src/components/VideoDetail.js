import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div className="ui segment">
        <p></p>
        <div className="ui active dimmer">
          <div className="ui loader"></div>
        </div>
      </div>
    );
  }

  const VIDEO_SRC = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div className="video-detail">
      <div className="ui raised segment">
        <div>
          <h3 className="ui header">{video.snippet.title}</h3>
          <div className="ui embed">
            <iframe title="Video Player" src={VIDEO_SRC} />
          </div>
          <em>{video.snippet.description}</em>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;

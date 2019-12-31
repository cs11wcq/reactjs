import React from "react";
import './VideoItem.css';

const VideoItem = ({video, onVideoSelect}) => {
  return (
      <div onClick={() => onVideoSelect(video)} className="video-item item">
        <img className="ui image"
            src={video.snippet.thumbnails.medium.url}
             alt={video.snippet.title}
        />
        <div className="content">
          <div className="header">{video.snippet.title}</div>
        </div>
      </div>
  )
}
export default VideoItem;

/*
snippet: {publishedAt: "2019-09-01T16:30:11.000Z", channelId: "UCxc9V3B75Ps8JGx_27G4Dyg",…}
publishedAt: "2019-09-01T16:30:11.000Z"
channelId: "UCxc9V3B75Ps8JGx_27G4Dyg"
title: "EVOLUTION of WORLD&#39;S TALLEST BUILDING: Size Comparison (1901-2022)"
description: "http://bit.ly/FilmCoreGodzillaMerch - Use Discount Code marvel5 to get 5% off any order over $49!! Helps out the channel a lot! Thank you! :D A 3D Size ..."
thumbnails: {default: {url: "https://i.ytimg.com/vi/PuTqWxuAazI/default.jpg", width: 120, height: 90},…}
channelTitle: "FilmCore"
liveBroadcastContent: "none"
 */

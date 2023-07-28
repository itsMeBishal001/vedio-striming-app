import React from "react";

const VideoCard = ({ info }) => {
 
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-1 m-5 w-80  shadow-lg">
      <img className="rounded-lg w-80 " alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li className="text-gray-400">{channelTitle}</li>
        <li className="text-gray-400">{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
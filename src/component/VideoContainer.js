import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/config";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideoData();
  }, []);

  async function getVideoData() {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    console.log(json.items);
    setVideos(json.items);
  }
  return (
    <div className="flex flex-wrap absolute z-0 pl-[10%] lg:pl-0 lg:relative  w-[100%] ">
      {videos.map((video) => (
        <Link to={"/browse/watch?v=" + video.id}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;

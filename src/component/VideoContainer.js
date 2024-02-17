import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/config";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import SearchLoader from "./SearchLoader";
const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideoData();
  }, []);

  async function getVideoData() {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();

    setVideos(json.items);
  }
  return (
    <div className="flex flex-wrap absolute z-0 pl-[10%] lg:pl-0 lg:relative w-[100%] lg:mt-0 mt-14 h-screen overflow-y-scroll">
      {(videos ?? []).length === 0 ? (
        <SearchLoader />
      ) : (
        videos &&
        videos.map((video, index) => (
          <Link to={"/browse/watch?v=" + video.id} key={video.id}>
            <VideoCard info={video} />
          </Link>
        ))
      )}
    </div>
  );
};

export default VideoContainer;

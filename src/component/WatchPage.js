import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { API_KEY, VIDEO_API } from "../utils/config";
import { FaShareAlt, FaThumbsUp, FaDownload } from "react-icons/fa";
const WatchPage = () => {
  const [searchParam] = useSearchParams();
  const [video, setVideo] = useState();
  const params = searchParam.get("v");
  console.log(params);

  useEffect(() => {
    getVideoData();
  }, []);

  async function getVideoData() {
    const data = await fetch(VIDEO_API + params + "&key=" + API_KEY);
    const json = await data.json();
    setVideo(json.items[0]);
    console.log(json.items[0]);
  }
  function formatCount(number) {
    if (number >= 1e6) {
      return (number / 1e6).toFixed(1) + "M";
    } else if (number >= 1e3) {
      return (number / 1e3).toFixed(1) + "K";
    } else {
      return number.toString();
    }
  }
  const { snippet = {}, statistics = {} } = video || {};
  const {
    thumbnails = {},
    title = "",
    channelTitle = "",
    description = "",
  } = snippet;
  const viewCount = statistics.viewCount || 0;
  const formattedViewCount = formatCount(viewCount);
  return (
    <div className=" bg-pink-100 w-[100%]">
      <div className="m-6 w-[66%] ">
        <iframe
          width="880"
          height="515"
          src={"https://www.youtube.com/embed/" + params}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="rounded-xl"
        ></iframe>

        <div className="mt-4 ">
          <div className="text-2xl font-medium">{title}</div>

          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center">
              <img
                src={thumbnails?.default?.url}
                alt={title || "Video Thumbnail"}
                className="rounded-full h-8 w-8 mr-2"
              />
              <div className="text-lg">{channelTitle}</div>
              <div className=" mx-4">{formattedViewCount} Views</div>
            </div>

            <div className="flex gap-4 text-md">
              <div className="bg-slate-200 p-2 rounded-3xl flex items-center cursor-pointer">
                <FaThumbsUp className="mr-1" />
                Like
              </div>
              <div className="bg-slate-200 p-2 rounded-3xl flex items-center cursor-pointer">
                <FaShareAlt className="mr-1" />
                Share
              </div>
              <div className="bg-slate-200 p-2 rounded-3xl flex items-center cursor-pointer">
                <FaDownload className="mr-1" />
                Download
              </div>
              <div className="bg-slate-200 p-2 rounded-3xl cursor-pointer">
                ...
              </div>
            </div>
          </div>
        </div>

        <div className=" my-5 bg-slate-100 p-5 rounded-xl">
          <div>{description.slice(0, 1000)}</div>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;

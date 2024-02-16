import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { VIDEO_API } from "../utils/config";
import { FaShareAlt, FaThumbsUp, FaDownload } from "react-icons/fa";
import CommentContainer from "./CommentContainer";
import Upcomming from "./Upcomming";
import LiveChatContainer from "./LiveChatContainer";
import Loader from "./Loader";
import formatCount from "../utils/formatCount";
const WatchPage = () => {
  const [searchParam] = useSearchParams();
  const [video, setVideo] = useState();
  const params = searchParam.get("v");

  useEffect(() => {
    getVideoData();
  }, [params]);

  async function getVideoData() {
    const data = await fetch(VIDEO_API + "&id=" + params);
    const json = await data.json();
    setVideo(json?.items[0]);
  }
  const {
    snippet = {},
    statistics = {},
    liveStreamingDetails = {},
  } = video || {};
  const {
    thumbnails = {},
    title = "",
    channelTitle = "",
    description = "",
    categoryId = "",
    liveBroadcastContent = "",
  } = snippet;

  const { activeLiveChatId = "" } = liveStreamingDetails;
  const viewCount = statistics.viewCount || 0;
  const Likecount = statistics.likeCount || 0;
  const formattedViewCount = formatCount(viewCount);
  const formattedLikeCount = formatCount(Likecount);

  return (video ?? []).length === 0 ? (
    <Loader />
  ) : (
    <div className="w-[100%] flex  lg:overflow-y-scroll h-screen ">
      <div className="m-6 w-[66%] ">
        <div className=" flex ">
          <div className=" lg:mt-0 mt-10">
            <iframe
              // width="880"
              // height="515"
              src={"https://www.youtube.com/embed/" + params}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="rounded-xl lg:w-[880px] lg:h-[515px] w-[400px] h-[350px] "
            ></iframe>
          </div>
        </div>
        <div className="mt-4 ">
          <div className="text-2xl font-medium">{title}</div>

          <div className="flex justify-between items-center mt-4 lg:flex-row flex-col">
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
                {formattedLikeCount}
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
        <CommentContainer />
      </div>
      <div className="flex lg:flex-col">
        {" "}
        {liveBroadcastContent == "live" ? (
          <div className="mt-6 lg:block hidden">
            <LiveChatContainer chatid={activeLiveChatId} />
          </div>
        ) : null}
        <div className="mt-6 lg:block hidden">
          <Upcomming id={categoryId} />
        </div>
      </div>
    </div>
  );
};

export default WatchPage;

import React from "react";
import { formatDistanceToNow } from "date-fns";
import formatCount from "../utils/formatCount";
const UpcommingVideoCard = ({ data }) => {
  const { snippet = {}, statistics = {} } = data;
  const {
    thumbnails = {},
    publishedAt = "",
    title = "",
    channelTitle = "",
  } = snippet;
  const { viewCount = "" } = statistics;

  const viewCounts = statistics.viewCount || 0;
  const formattedViewCount = formatCount(viewCounts);
  return (
    <div className="bg-slate-100  hover:bg-slate-200 mt-1 rounded-xl p-2 flex items-center">
      <div className="w-1/3 flex justify-center items-center">
        <img
          src={thumbnails?.default?.url}
          alt={title || "Video Thumbnail"}
          className="w-full rounded"
        />
      </div>
      <div className="flex-1 ml-4">
        <h1 className="text-sm font-bold">{title.trim().slice(0, 80)}</h1>
        <p className="text-sm">{channelTitle}</p>
        <p className=" text-sm">{formattedViewCount} Views </p>
      </div>
    </div>
  );
};

export default UpcommingVideoCard;

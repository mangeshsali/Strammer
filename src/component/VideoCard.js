import { formatDistanceToNow } from "date-fns";
import formatCount from "../utils/formatCount";

const VideoCard = ({ info }) => {
  if (!info) {
    return <div>No information available</div>;
  }

  const { snippet = {}, statistics = {} } = info;

  const {
    thumbnails = {},
    channelTitle = "",
    title = "",
    publishedAt = "",
  } = snippet;
  const providedDate = new Date(publishedAt);
  const timeAgo = formatDistanceToNow(providedDate, { addSuffix: true });
  const viewCount = statistics.viewCount || 0;
  const formattedViewCount = formatCount(viewCount);
  return (
    <div className="rounded-xl border w-[300px] h-[350px] m-2  shadow-lg p-2 hover:shadow-xl transition duration-500 transform hover:scale-105">
      <div className=" rounded-xl">
        <img
          src={thumbnails.high?.url}
          alt={title || "Video Thumbnail"}
          className=" rounded-lg"
        />
      </div>
      <div className=" font-medium">{title.slice(0, 70) + "..."}</div>
      <div>{channelTitle}</div>
      <div className=" flex ">
        <div className=" mr-1">{formattedViewCount} Views </div>
        <div>•{timeAgo}</div>
      </div>
    </div>
  );
};

export default VideoCard;

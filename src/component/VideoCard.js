const VideoCard = ({ info }) => {
  if (!info) {
    return <div>No information available</div>;
  }

  const { snippet = {}, statistics = {} } = info;

  const { thumbnails = {}, channelTitle = "", title = "" } = snippet;

  return (
    <div className="rounded-xl border w-[300px] m-2 p-2 shadow-lg">
      <div className=" rounded-xl">
        <img src={thumbnails.high?.url} alt={title || "Video Thumbnail"} />
      </div>
      <div className=" font-medium">{title.slice(0, 70) + "..."}</div>
      <div>{channelTitle}</div>
      <div>{statistics.viewCount || 0}</div>
    </div>
  );
};

export default VideoCard;

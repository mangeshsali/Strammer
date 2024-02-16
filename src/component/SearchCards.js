import { useState } from "react";
import { formatDistanceToNow } from "date-fns";
const SearchCards = ({ info }) => {
  const [publishDate, setPublishDate] = useState();
  if (!info) {
    return <div>No information available</div>;
  }

  const { snippet = {}, statistics = {} } = info;

  const {
    thumbnails = {},
    channelTitle = "",
    title = "",
    description = "",
    publishedAt = "",
  } = snippet;

  const providedDate = new Date(publishedAt);
  const timeAgo = formatDistanceToNow(providedDate, { addSuffix: true });

  return (
    <div className="flex flex-col md:flex-row  my-2 lg:mt-2 mt-14 bg-gray-100 rounded-xl p-4   shadow-xl cursor-pointer hover:bg-gray-200">
      <div className="md:w-1/4 md:mr-4 mb-4 md:mb-0 lg:w-[10rem] flex justify-center items-center">
        <img
          src={thumbnails.high?.url}
          alt={title || "Video Thumbnail"}
          className="rounded-md"
        />
      </div>
      <div className="md:w-2/4">
        <p className="py-1 font-medium">{title}</p>
        <p className="py-1 text-gray-800">{channelTitle}</p>
        <p className="text-gray-800 text-sm">{description.slice(0, 100)}</p>
        <p className="py-1 text-gray-800">{timeAgo}</p>
      </div>
    </div>
  );
};

export default SearchCards;

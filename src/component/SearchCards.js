import { useState } from "react";

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

  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  }

  const originalDate = "2024-02-05T10:29:11Z";
  const formattedDate = formatDate(originalDate);
  const DateResult = formattedDate;

  return (
    <div className="flex flex-col md:flex-row lg:w-[80%]   my-2 mx-4 bg-gray-100 rounded-xl p-4   shadow-xl cursor-pointer hover:bg-gray-200">
      <div className="md:w-1/3 md:mr-4 mb-4 md:mb-0 lg:w-[14rem]">
        <img
          src={thumbnails.high?.url}
          alt={title || "Video Thumbnail"}
          className="rounded-sm"
        />
      </div>
      <div className="md:w-2/3">
        <p className="py-1 font-medium">{title}</p>
        <p className="py-1 text-gray-800">{channelTitle}</p>
        <p className="text-gray-800">{description.slice(0, 100)}</p>
        <p className="py-1 text-gray-800">{DateResult}</p>
      </div>
    </div>
  );
};

export default SearchCards;

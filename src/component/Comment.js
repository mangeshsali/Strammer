import { formatDistanceToNow } from "date-fns";
const Comment = ({ data }) => {
  const providedDate = new Date(
    data?.snippet?.topLevelComment?.snippet?.publishedAt
  );
  const timeAgo = formatDistanceToNow(providedDate, { addSuffix: true });
  return (
    <div className="bg-white shadow-md rounded-lg p-2 mb-2 flex  ">
      <div className="items-center">
        <img
          src={data?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl}
          alt="Profile"
          className="rounded-full  w-full"
        />
      </div>

      <div className="ml-3 ">
        <div className=" flex">
          <h2 className="text-sm font-semibold">
            {data?.snippet?.topLevelComment?.snippet?.authorDisplayName.slice(
              0,
              10
            )}
          </h2>
          <p className="text-gray-600 text-sm p-1 ml-2 ">{timeAgo}</p>
        </div>
        <p className="">
          {data?.snippet?.topLevelComment?.snippet?.textOriginal.slice(0, 100)}
        </p>
      </div>
    </div>
  );
};

export default Comment;

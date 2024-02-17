import React, { useEffect, useState } from "react";
import { COMMENTS_API } from "../utils/config";
import { useSearchParams } from "react-router-dom";
import Comment from "./Comment";
import Loader from "../component/Loader";
const CommentContainer = () => {
  const [commentsData, setCommentsData] = useState([]);
  const [searchParam] = useSearchParams();
  const params = searchParam.get("v");

  useEffect(() => {
    getComment();
  }, [params]);

  const getComment = async () => {
    const data = await fetch(COMMENTS_API + "&videoId=" + params);
    const json = await data.json();
    setCommentsData(json.items);
  };

  if (!commentsData) {
    return <div>No information available</div>;
  }
  return (
    <div className="p-2 bg-slate-100 rounded-xl w-[100%] lg:w-[100%] ">
      <h1 className="text-2xl font-bold m-4">
        {commentsData.length > 0
          ? `${commentsData.length} Comments`
          : "Loading..."}
      </h1>
      {commentsData.length > 0 ? (
        commentsData.map((comment, index) => (
          <Comment data={comment} key={index} />
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default CommentContainer;

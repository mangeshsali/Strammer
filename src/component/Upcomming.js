import React, { useEffect, useState } from "react";
import {RECOMMAND_API} from "../utils/config";
import UpcommingVideoCard from "./UpcommingVideoCard";
import { Link } from "react-router-dom";

const Upcomming = ({ id }) => {
  const [upVideo, setUpVideo] = useState([]);
  useEffect(() => {
    getUpcomming();
  }, [id]);

  const getUpcomming = async () => {
    const data = await fetch(RECOMMAND_API + id);
    const json = await data.json();
    setUpVideo(json?.items);
  };

  return (
    <>
      <div className=" font-bold text-xl">Recommendation</div>
      {upVideo &&
        upVideo.length > 0 &&
        upVideo.map((video) => (
          <Link to={"/browse/watch?v=" + video.id} key={video.id}>
            <UpcommingVideoCard data={video} />
          </Link>
        ))}
    </>
  );
};

export default Upcomming;

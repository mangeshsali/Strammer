import React, { useRef } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";
import VideoContainer from "./VideoContainer";
import WatchPage from "./WatchPage";
import { Outlet } from "react-router-dom";
const Browse = () => {
  const isMenuOpen = useSelector((store) => store.toggle.isMenuOpen);

  return (
    <div>
      <Header />
      <div className="flex">
        {isMenuOpen && <SideBar />}

        {/* <VideoContainer />
        <WatchPage /> */}
        <Outlet />
      </div>
    </div>
  );
};

export default Browse;

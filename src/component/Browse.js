import React, { useRef } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";
const Browse = () => {
  const isMenuOpen = useSelector((store) => store.toggle.isMenuOpen);

  return (
    <div>
      <Header />
      {isMenuOpen ? <SideBar /> : null}
    </div>
  );
};

export default Browse;

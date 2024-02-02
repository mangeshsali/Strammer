import React from "react";
import {
  FaMusic,
  FaShoppingBag,
  FaGamepad,
  FaBroadcastTower,
  FaFilm,
  FaNewspaper,
  FaRunning,
  FaBook,
  FaHeadphones,
  FaTshirt,
  FaFire,
  FaCog,
  FaHistory,
  FaQuestionCircle,
  FaComment,
} from "react-icons/fa";
const SideBar = () => {
  return (
    <div className="lg:w-1/6 bg-black  text-gray-300 p-2 w-1/2 text-lg">
      <div>
        <ul className="p-4 list-disc">
          <p className=" my-4 text-white font-medium text-xl">Explore</p>
          <li className="flex items-center py-2">
            <FaFire className="mr-4" /> Trending
          </li>
          <li className="flex items-center py-2">
            <FaShoppingBag className="mr-4" /> Shopping
          </li>
          <li className="flex items-center py-2">
            <FaMusic className="mr-4" /> Music
          </li>
          <li className="flex items-center py-2">
            <FaFilm className="mr-4" /> Films
          </li>
          <li className="flex items-center py-2">
            <FaBroadcastTower className="mr-4" /> Live
          </li>
          <li className="flex items-center py-2">
            <FaGamepad className="mr-4" /> Gaming
          </li>
          <li className="flex items-center py-2">
            <FaNewspaper className="mr-4" /> News
          </li>
          <li className="flex items-center py-2">
            <FaRunning className="mr-4" /> Sport
          </li>
          <li className="flex items-center py-2">
            <FaBook className="mr-4" /> Learning
          </li>
          <li className="flex items-center py-2">
            <FaHeadphones className="mr-4" /> Music
          </li>
          <li className="flex items-center py-2">
            <FaTshirt className="mr-4" /> Fashion
          </li>
        </ul>
      </div>
      <hr />
      <div className=" my-4">
        <ul>
          <li className="flex items-center py-2">
            <FaCog className="mr-4" /> Settings
          </li>
          <li className="flex items-center py-2">
            <FaHistory className="mr-4" /> Report History
          </li>
          <li className="flex items-center py-2">
            <FaQuestionCircle className="mr-4" /> Help
          </li>
          <li className="flex items-center py-2">
            <FaComment className="mr-4" /> Send Feedback
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;

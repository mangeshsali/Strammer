import React, { useState } from "react";
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
import { useDispatch } from "react-redux";
import { searchQuerry } from "../utils/useSearchSlice";
import { Link, useNavigate } from "react-router-dom";
const SideBar = () => {
  const [querry, setQuerry] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handler(event) {
    const buttonLabel = event.target.innerText;
    setQuerry(buttonLabel);
    dispatch(searchQuerry(buttonLabel));
    navigate(`/browse/result?v=${buttonLabel}`);
  }

  const data = [
    { icon: <FaFire />, label: "Trending" },
    { icon: <FaShoppingBag />, label: "Shopping" },
    { icon: <FaMusic />, label: "Music" },
    { icon: <FaFilm />, label: "Films" },
    { icon: <FaBroadcastTower />, label: "Live" },
    { icon: <FaGamepad />, label: "Gaming" },
    { icon: <FaNewspaper />, label: "News" },
    { icon: <FaRunning />, label: "Sport" },
    { icon: <FaBook />, label: "Learning" },
    { icon: <FaHeadphones />, label: "Music" },
    { icon: <FaTshirt />, label: "Fashion" },
  ];
  return (
    <div className=" bg-black  text-gray-300 p-2 lg:w-[15%]  w-1/2  text-lg absolute z-10 lg:relative lg:h-[50%] border-r">
      <div>
        {data.map((m, index) => (
          <button
            className="flex items-center py-2"
            onClick={handler}
            key={index}
          >
            {m.icon && React.cloneElement(m.icon, { className: "mr-4" })}
            {m.label}
          </button>
        ))}
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

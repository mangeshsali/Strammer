import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { adduser, removeuser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/play.png";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSignOutAlt } from "react-icons/fa";
import { toggleMenu } from "../utils/toggleSlice";
import { SUGGEST_API } from "../utils/config";
const Header = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [showSearchList, setShowsearchList] = useState(false);
  // const userName = useSelector((store) => store);

  const handler = () => {
    dispatch(toggleMenu());
  };

  const nav = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(adduser({ uid: uid, email: email, displayName: displayName }));
        // Navigate("/browse");
      } else {
        dispatch(removeuser());
        Navigate("/");
      }
    });
  }, []);

  useEffect(() => {
    const Timer = setTimeout(() => {
      getSuggest();
    }, 200);
    return () => {
      clearTimeout(Timer);
    };
  }, [search]);

  async function getSuggest() {
    const data = await fetch(SUGGEST_API + search);
    const json = await data.json();
    setSearchData(json[1]);
  }
  return (
    <>
      <div className="flex justify-between items-center text-xl bg-red-600 p-1 shadow-xl relative">
        <div className="flex items-center gap-2">
          <div className=" cursor-pointer p-4" onClick={handler}>
            <GiHamburgerMenu />
          </div>

          <div className="text-white">
            <Link to="/browse">
              <img src={logo} alt="logo" className="w-14" />
            </Link>
          </div>
        </div>

        <div className="flex items-center lg:w-1/4">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300  mr-2 rounded-lg w-full "
            onChange={(e) => setSearch(e.target.value)}
            onFocus={() => setShowsearchList(true)}
            onBlur={() => setShowsearchList(false)}
          />
          <div className=" cursor-pointer hover: text-white">
            <FaSearch />
          </div>
        </div>

        <div className=" flex">
          {/* <p className=" mx-4 hidden lg:block text-white">{userName}</p> */}
          <button
            onClick={nav}
            className="bg-white text-red-600 p-1 rounded-md"
          >
            <FaSignOutAlt />
          </button>
        </div>
      </div>
      {showSearchList && (
        <div className="lg:w-[24%] w-[55%] absolute ml-[28%] lg:ml-[40%]  bg-white text-black z-30  rounded-xl">
          <ul>
            {searchData.map((s) => (
              <li
                className="p-2 flex items-center hover:bg-gray-200 gap-2"
                key={s}
              >
                <FaSearch />
                {s}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;

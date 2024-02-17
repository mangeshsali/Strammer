import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { adduser, removeuser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/play.png";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSignOutAlt } from "react-icons/fa";
import { toggleMenu } from "../utils/toggleSlice";
import { SUGGEST_API } from "../utils/config";
import { searchQuerry } from "../utils/useSearchSlice";

const Header = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const selector = useSelector((store) => store.search);
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);
  const userName = useSelector((store) => store.user);

  const inputRef = useRef(null);
  const searchDataRef = useRef(null);

  const handler = () => {
    dispatch(toggleMenu());
  };

  const searchHandler = (e) => {
    e.preventDefault();
    dispatch(searchQuerry(search));
  };

  useEffect(() => {
    if (selector !== null) {
      Navigate("/browse/result?v=" + selector);
    }
  }, [selector]);

  const handleSearchTermClick = (searchTerm, event) => {
    dispatch(searchQuerry(searchTerm));
    setSearch(searchTerm);
    setSearchData(false);
    inputRef.current.focus();
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

  useEffect(() => {
    // Function to handle click outside searchData div
    function handleClickOutside(event) {
      if (
        searchDataRef.current &&
        !searchDataRef.current.contains(event.target) &&
        inputRef.current !== event.target // Exclude clicks on input
      ) {
        setSearchData([]); // Hide searchData when clicked outside
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
          <div className="text-white text-3xl">
            <Link to="/browse">
              <h1 className=" logo-text cursor-pointer">streamer</h1>
            </Link>
          </div>
        </div>

        <form
          onSubmit={searchHandler}
          className="lg:flex items-center lg:w-1/4   hidden"
        >
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300  mr-2 rounded-lg w-full "
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            ref={inputRef}
          />
          <button type="submit" className="cursor-pointer hover:text-white">
            <FaSearch />
          </button>
        </form>
        <div className=" flex justify-center items-center ">
          <FaUserCircle className=" text-white shadow-lg text-2xl" />
          <p className=" mx-4 hidden lg:block text-white">{userName.email}</p>
          <button
            onClick={nav}
            className="bg-white text-red-600 p-1 rounded-md"
          >
            <FaSignOutAlt />
          </button>
        </div>
      </div>
      <div className=" items-center lg:hidden block  w-1/2 ml-[20%] absolute z-0 top-14 ">
        <div className=" flex  justify-center items-center  py-2">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-lg w-full  py-2 mr-2 my-2"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            ref={inputRef}
          />
          <div className="cursor-pointer hover:text-white">
            <FaSearch className="text-black" onClick={searchHandler} />
          </div>
        </div>
      </div>
      {searchData.length > 0 && (
        <div
          ref={searchDataRef}
          className="absolute ml-[18%] lg:ml-[37%]  bg-white text-black z-30  rounded-xl lg:mt-0 mt-14 lg:w-[22%]"
        >
          <ul>
            {searchData.map((searchTerm, index) => (
              <li
                className="p-2 flex items-center hover:bg-gray-200 gap-2"
                key={index}
                onClick={() => handleSearchTermClick(searchTerm)}
              >
                <FaSearch />
                {searchTerm}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;

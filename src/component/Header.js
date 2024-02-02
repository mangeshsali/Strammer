import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { adduser, removeuser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/play.png";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSignOutAlt } from "react-icons/fa";
import { toggleMenu } from "../utils/toggleSlice";
const Header = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user.email);

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
        Navigate("/browse");
      } else {
        dispatch(removeuser());
        Navigate("/");
      }
    });
  }, []);

  return (
    <div className="flex justify-between items-center text-xl bg-red-600 p-1">
      <div className="flex  items-center gap-2 ">
        <div className=" cursor-pointer" onClick={handler}>
          <GiHamburgerMenu />
        </div>

        <div className="text-white">
          <img src={logo} alt="logo" className="w-14" />
        </div>
      </div>
      <div className="flex items-center lg:w-1/4">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300  mr-2 rounded-lg w-full "
        />
        <div className=" cursor-pointer">
          <FaSearch />
        </div>
      </div>

      <div className=" flex">
        <p className=" mx-4 hidden lg:block">{user}</p>
        <button onClick={nav} className="bg-white text-red-600 p-1 rounded-md">
          <FaSignOutAlt />
        </button>
      </div>
    </div>
  );
};

export default Header;

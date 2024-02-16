import { set } from "date-fns";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const LiveChat = ({ name, message, profile }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center space-x-2 p-1 bg-slate-300">
      <div>
        <img className="w-6 rounded-full" src={profile} alt="profile" />
      </div>
      <div className="">
        <p className="text-sm font-medium">{name}</p>
        <p className="text-xs">{message}</p>
      </div>
    </div>
  );
};

export default LiveChat;

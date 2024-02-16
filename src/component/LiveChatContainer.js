import React, { useEffect, useRef, useState } from "react";
import { LIVE_CHAT } from "../utils/config";
import LiveChat from "./LiveChat";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/messageSlice";

const LiveChatContainer = ({ chatid }) => {
  const container = useRef(null);

  const dispatch = useDispatch();
  const selector = useSelector((store) => store.message.message);
  const user = useSelector((store) => store.user);
  const [liveChat, setLiveChat] = useState([]);
  const [chat, setChat] = useState("");
  const { snippet = {}, authorDetails = {} } = liveChat;
  const { textMessageDetails = {}, messageText = "" } = snippet;
  const { displayName = "", profileImageUrl = "" } = authorDetails;

  useEffect(() => {
    const Timer = setInterval(async () => {
      const data = await fetch(LIVE_CHAT + chatid);
      const json = await data.json();
      const { items } = json || {};
      if (items) {
        items.forEach((item) => {
          const { snippet = {}, authorDetails = {} } = item;
          const { textMessageDetails = {} } = snippet;
          const { displayName = "", profileImageUrl = "" } = authorDetails;
          dispatch(
            addMessage({
              name: displayName,
              message: textMessageDetails?.messageText || "",
              profile: profileImageUrl,
            })
          );
        });
      }
    }, 2000);
    return () => clearInterval(Timer);
  }, [chatid, dispatch]);

  useEffect(() => {
    if (container.current) {
      container.current.scrollTop = container.current.scrollHeight;
    }
  }, [liveChat, selector]);
  if (!liveChat) {
    return null;
  }

  return (
    <>
      <div className=" text-xl font-bold">Live Chat</div>
      <div
        className="mr-4 h-[480px] overflow-y-scroll rounded-lg bg-slate-400"
        ref={container}
      >
        {selector &&
          selector.map((live) => (
            <LiveChat
              name={live.name}
              message={live.message}
              profile={live.profile}
            />
          ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: user.email,
              message: chat,
            })
          );
        }}
      >
        <div>
          <input
            type="text"
            value={chat}
            onChange={(e) => setChat(e.target.value)}
            className="p-1 border-[2px] w-[70%] m-1 rounded-md mr-2"
          />
          <button
            type="submit"
            className=" bg-slate-800 p-1 rounded-md text-white"
          >
            Send
          </button>
        </div>
      </form>
    </>
  );
};

export default LiveChatContainer;

import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Login from "./Login";
import Browse from "./Browse";
import { useDispatch } from "react-redux";
import VideoContainer from "./VideoContainer";
import WatchPage from "./WatchPage";
import SearchPaga from "./SearchPaga";
import { ErrorPg } from "./ErrorPg";

const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <ErrorPg />,
    },
    {
      path: "/browse",
      element: <Browse />,

      children: [
        {
          path: "/browse",
          element: <VideoContainer />,
        },
        {
          path: "watch",
          element: <WatchPage />,
        },
        {
          path: "result",
          element: <SearchPaga />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
